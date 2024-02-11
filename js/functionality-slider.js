const sliderMenuBtns = document.querySelectorAll('.slider__menu button');
const slidesWrapper = document.querySelector('.slider__slides');

function changeSlide(event) {
    slidesWrapper.style.transform = `translateX(-${(Number(event.target.dataset.order) - 1) * 100}vw)`;
    
    let previousActiveBtn = document.querySelector('.slider__menu__btn--active');

    if(previousActiveBtn) {
        previousActiveBtn.classList.remove('slider__menu__btn--active');
    }

    event.target.classList.add('slider__menu__btn--active');
}

sliderMenuBtns.forEach(btn => btn.addEventListener('click', (e) => changeSlide(e)));