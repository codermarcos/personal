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

function onload() {
  categories();
}

window.addEventListener('load', onload);