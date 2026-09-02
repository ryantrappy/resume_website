import { Collapse } from 'bootstrap';
import './styles.scss';

const scrollLinks = document.querySelectorAll('a.js-scroll-trigger[href*="#"]:not([href="#"])');

scrollLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    const target = targetId ? document.querySelector(targetId) : null;

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });

    const navCollapse = document.querySelector('#navbarSupportedContent');
    if (navCollapse && navCollapse.classList.contains('show')) {
      const bsCollapse = Collapse.getOrCreateInstance(navCollapse);
      bsCollapse.hide();
    }
  });
});
