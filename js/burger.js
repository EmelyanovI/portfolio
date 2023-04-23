const BURGER_OPENED_CLASSNAME = 'menu__burger-open';
const BURGER_BTN_OPENED_CLASSNAME = 'menu__btn-open';


const burgerNode = document.querySelector('.js-menu__burger');
const burgerBtnNode = document.querySelector('.js-menu__btn');
const burgerContentNode = document.querySelector('.js-menu__burger-wrapper')

burgerBtnNode.addEventListener('click', toggleBurger);

burgerNode.addEventListener('click', (event) => {
    const isClickOutsideContent = !event.composedPath().includes(burgerBtnNode)

    if (isClickOutsideContent) {
        toggleBurger();
    }
})

function toggleBurger() {
    burgerNode.classList.toggle(BURGER_OPENED_CLASSNAME);
    bodyNode.classList.toggle(BODY_FIXED_CLASSNAME);
    burgerBtnNode.classList.toggle(BURGER_BTN_OPENED_CLASSNAME);
}
