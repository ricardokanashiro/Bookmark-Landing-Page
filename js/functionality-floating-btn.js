const floatingBtn = document.querySelector('.floating-button');

function showFloatingBtn() {
    if(document.documentElement.scrollTop > 250) {
        floatingBtn.style.visibility = 'visible';
        floatingBtn.style.opacity = '1';
    }
    else if(document.documentElement.scrollTop < 250) {
        floatingBtn.style.visibility = 'hidden';
        floatingBtn.style.opacity = '0';
    }
}

function scrollToTop() {
    window.scrollTo(0, 0);
}

window.addEventListener('scroll', showFloatingBtn);

floatingBtn.addEventListener('click', scrollToTop);