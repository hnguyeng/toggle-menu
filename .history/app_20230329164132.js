const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
toggle.addEventListener('click', handleClick);
function handleClick(e){
    menu.classList.add('is-show')
}