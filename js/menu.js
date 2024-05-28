const toggleMenuElement = document.getElementById('toggle_menu');
const mainMenuElement = document.getElementById('main_menu');

toggleMenuElement.addEventListener('click', () => {
    mainMenuElement.classList.toggle('main_menu--show');
})

/* TABLET */
window.addEventListener('resize', function () {
    const element = document.getElementById('banner');
    if (window.innerWidth > 601) {
        element.classList.add('banner_tablet');
        element.classList.remove('banner')
    };
})