document.addEventListener('DOMContentLoaded', (e) => {
    const closeMenuIconButton = document.querySelector('.close-menu-icon');
    const openMenuIconButton = document.querySelector('.open-menu-icon');

    const menu = document.querySelector('.menu');
    const menuNavigationButtons = document.querySelectorAll('.navigation-buttons')[1];

    openMenuIconButton.addEventListener('click', () => {
        menu.classList.add('menu-active');
        menuNavigationButtons.classList.add('menu-active');
    });

    closeMenuIconButton.addEventListener('click', () => {
        menu.classList.remove('menu-active');
        menuNavigationButtons.classList.remove('menu-active');
    })
})
