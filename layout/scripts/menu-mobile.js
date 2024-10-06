document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const menuMobile = document.querySelector('.menu-mobile');
    const menuButton = document.querySelector('.menu-mobile-search-button__button');
    const overlay = document.querySelector('.overlay');

    if (!menuMobile) {
        console.error('DOM: мобильное меню не найдено');
        return;
    }

    if (!menuButton) {
        console.error('DOM: кнопка мобильного меню не найдена');
        return;
    }

    if (!overlay) {
        console.error('DOM: оверлей не найден');
    }

    menuButton.addEventListener('click', () => {
        menuMobile.classList.toggle('menu-mobile_visible');
        overlay.classList.toggle('overlay_visible');
        body.classList.toggle('no-scroll');
    })

    if (overlay) {
        overlay.addEventListener('click', e => {
            e.stopPropagation();
            menuMobile.classList.remove('menu-mobile_visible');
            overlay.classList.remove('overlay_visible');
            body.classList.remove('no-scroll');
        })
    }
})
