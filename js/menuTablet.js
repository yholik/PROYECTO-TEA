/* TABLET */
window.addEventListener('resize', function () {
    const element = document.getElementById('banner');
    if (window.innerWidth > 601 && window.innerWidth < 900) {
        element.classList.add('banner_tablet');
        element.classList.remove('banner');
    }else{
        this.document.getElementById('banner_tablet');
        element.classList.add('banner');
        element.classList.remove('banner_tablet');
    };
})