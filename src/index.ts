import styles from './style';

function categories() {
  const data = document.querySelectorAll(`.${styles.projectCategories} dd`);

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
  const data = document.querySelectorAll<HTMLButtonElement>(`.${styles.seeMoreButton}`);

  data
    .forEach(
      button => {
        const items = button.dataset.listItems;
        
        if (!items) return;

        button
          .addEventListener(
            'click', 
            () => {              
              const elements = document.querySelectorAll(`${items}.hidden`);

              if (elements.length === 0) return;

              for (let i = 0; i < 1; i++) {
                const element = elements.item(i);
                if (!element) break;
                element.classList.remove('hidden');                
              }
            },
          );  
      },
    );
}

function onload() {
  categories();
  readMore();
}

window.addEventListener('load', onload);