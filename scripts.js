//вызов любой переменной
const $ = document.querySelector.bind(document);

//бургер кнопка хедера
const burgerIcon = $('.burger-image');
const headerMenu = $('.header__left-bottom');

burgerIcon.addEventListener('click', () => {
    headerMenu.classList.toggle('display-active');
})