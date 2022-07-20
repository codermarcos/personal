

function categories() {
  const data = document.querySelectorAll(`dd.p-skill`);

  data
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

function readMore() {
  const data = document.querySelectorAll<HTMLButtonElement>('button[data-list-items]');

  data
    .forEach(
      button => {
        const { listItems, goTo } = button.dataset;

        if (listItems === undefined || goTo === undefined) return;

        const items = button.parentElement?.querySelector<HTMLUListElement>(listItems);

        items
          ?.addEventListener(
            'wheel',
            (e) => {
              e.preventDefault();

              items?.scrollTo({ top: items.scrollTop + e.deltaY, behavior: 'smooth' });
            },
            { passive: true },
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

function openItem() {
  const data = document.querySelectorAll<HTMLLIElement>('.p-experience');

  data
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

function onloaded() {
  categories();
  readMore();
  openItem();
}

window.addEventListener('load', onloaded);
