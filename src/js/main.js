import './modules/slick-slider';
import navMenu from './modules/navMenu';
import modals from './modules/modalForm';

document.addEventListener('DOMContentLoaded', () => {
    "use sctrict";

    navMenu('.header', '.navigation', '.link', 'header--adaptive', 'header--fixed');
    modals();
});