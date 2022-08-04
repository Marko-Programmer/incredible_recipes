//            header__burger-menu


const headerBurger = document.getElementById('header__burger');
const headerMenu = document.getElementById('header__menu');
const mainOpacity = document.getElementById('main__opacity');
const body = document.body;

headerBurger.addEventListener('click', (e) => {
    e.preventDefault()
    headerMenu.classList.toggle('active');
    headerBurger.classList.toggle('active');
    mainOpacity.classList.toggle('active');
    body.classList.toggle('lock');

    // window.scrollTo({
    //     top: 0,
    //     behavior: "smooth"
    // });
})



//          Links scroll

const menuLinks = document.querySelectorAll('.scroll__to[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset -60;
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            headerBurger.classList.remove('active');
            headerMenu.classList.remove('active');
            mainOpacity.classList.remove('active');
            e.preventDefault();
        }
        body.classList.remove('lock')
    }
}