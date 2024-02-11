const hamburguerBtn = document.querySelector('.header__hamburger-btn');
const headerMenu = document.querySelector('.header__menu');
const modalBlur = document.querySelector('.modal-blur');

function toggleMenu(event) {
    headerMenu.classList.toggle('header__menu--active');
    modalBlur.classList.toggle('modal-blur--active');
    hamburguerBtn.classList.toggle('header__hamburger-btn--active');

    document.querySelector('body').classList.toggle('body--active');

    window.scrollTo(0, 0);
}

hamburguerBtn.addEventListener('click', (event) => toggleMenu(event));