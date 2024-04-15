function categoriesShowTitle(categories: NodeListOf<HTMLElement>) {
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
			(button) => {
				const { listItems, goTo } = button.dataset;

				if (listItems === undefined || goTo === undefined) return;

				const items = button.parentElement?.querySelector<HTMLUListElement>(listItems);

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

function setupPrint(allDetails: NodeListOf<HTMLDetailsElement>) {

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

function setupHorizontalScroll() {
	const articles = document.querySelector('[aria-label="Articles and posts"]') ?? document.querySelector('Artigos e postagens');
	document.addEventListener('wheel', (e) => {
		let target = e.target as HTMLElement;

		if (!['DL','DT','DD'].includes(target.tagName) && !articles?.contains(target)) return;

		e.stopPropagation();
		e.preventDefault();

		let move = e.deltaY > 0 ? 50 : -50;

		if (['DT','DD'].includes(target.tagName))
			target = target.parentElement!;

		if (articles?.contains(target)) {
			target = articles as HTMLElement;
			move += move > 0 ? 150 : -150;
		}

		if (target.tagName === 'DL' || target.tagName === 'OL')
			target.scrollTo({
				left: target.scrollLeft + (move),
				behavior: 'smooth',
			});
	}, { passive: false });
}

function onloaded() {
	const readMoreButtons = document.querySelectorAll<HTMLButtonElement>('button[data-list-items]');
	const experiences = document.querySelectorAll<HTMLLIElement>('.p-experience');
	const allDetails = document.body.querySelectorAll('details');
	const categoriesValue = document.querySelectorAll('dd');

	categoriesShowTitle(categoriesValue);
	readMore(readMoreButtons);
	openExperiences(experiences);
	setupHorizontalScroll();
	setupPrint(allDetails);
}

window.addEventListener('load', onloaded);
