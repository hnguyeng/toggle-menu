const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
toggle.addEventListener('click', handleClick);
function handleClick(e){
    menu.classList.toggle('is-show');
    e.target.classList.toggle('fa-bars');
    e.target.classList.toggle('fa-times');
}