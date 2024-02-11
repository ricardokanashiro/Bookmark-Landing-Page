const floatingBtn = document.querySelector('.floating-button');

function showFloatingBtn() {
    if(document.documentElement.scrollTop > 250) {
        floatingBtn.style.display = 'flex';
    }
    else if(document.documentElement.scrollTop < 250) {
        floatingBtn.style.display = 'none';
    }
}

function scrollToTop() {
    window.scrollTo(0, 0);
}

window.addEventListener('scroll', showFloatingBtn);

floatingBtn.addEventListener('click', scrollToTop);