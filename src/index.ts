function categoriesShowTitle(categories: NodeListOf<HTMLDListElement>) {
	categories
		.forEach(
			dd => {
				const dt = dd.previousElementSibling;
				if (!dt) return;

				const evEnter = 'mouseenter';
				const evLeave = 'mouseleave';
				const activated = () => dt.classList.add('active');
				const deactivate = () => dt.classList.remove('active');

				dt.addEventListener(evEnter, activated);
				dt.addEventListener(evLeave, deactivate);
				dd.addEventListener(evEnter, activated);
				dd.addEventListener(evLeave, deactivate);
			},
		);
}

function readMore(buttons: NodeListOf<HTMLButtonElement>) {
	buttons
		.forEach(
			(button, idx) => {
				const { listItems, goTo } = button.dataset;

				if (listItems === undefined || goTo === undefined) return;

				const items = button.parentElement?.querySelector<HTMLUListElement>(listItems);

				if (idx % 2 !== 0)
					items
						?.addEventListener(
							'wheel',
							(e) => {
								e.preventDefault();

								items?.scrollTo({ top: items.scrollTop + (e.deltaY > 0 ? 150 : -200), behavior: 'smooth' });
							},
							{ passive: false },
						);

				button
					.addEventListener(
						'click',
						() => {
							items?.scrollTo({ top: items.scrollTop + parseInt(goTo), behavior: 'smooth' });
						},
					);
			},
		);
}

function openExperiences(experiences: NodeListOf<HTMLLIElement>) {
	experiences
		.forEach(
			li => {
				const summary = li.querySelector('details > summary');
				if (summary === null) return;

				const handler = (e: Event) => {
					e.stopImmediatePropagation();
					e.preventDefault();
					const active = summary.parentElement?.hasAttribute('open');
					summary.parentElement?.toggleAttribute('open', !active);
					li.classList.toggle('open', !active);
				};

				li
					.addEventListener('click', handler);
				summary
					.addEventListener('click', handler);
			},
		);
}

function setupPrint(allDetails: NodeListOf<HTMLDetailsElement>,) {

	window.addEventListener('beforeprint', () => {
		document.body.classList.add('print');

		allDetails.forEach((details) => {
			details.setAttribute('open', '');
		});
	});

	window.addEventListener('afterprint', () => {
		allDetails.forEach((details) => {
			details.removeAttribute('open');
		});
	});
}

function onloaded() {
	const readMoreButtons = document.querySelectorAll<HTMLButtonElement>('button[data-list-items]');
	const experiences = document.querySelectorAll<HTMLLIElement>('.p-experience');
	const categoriesValue = document.querySelectorAll<HTMLDListElement>('dd');
	const allDetails = document.body.querySelectorAll('details');

	categoriesShowTitle(categoriesValue);
	readMore(readMoreButtons);
	openExperiences(experiences);
	setupPrint(allDetails);
}

window.addEventListener('load', onloaded);
