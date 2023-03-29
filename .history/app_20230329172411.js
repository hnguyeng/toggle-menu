const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
toggle.addEventListener('click', handleClick);
function handleClick(e){
    menu.classList.toggle('is-show');
    e.target.classList.toggle('fa-bars');
    e.target.classList.toggle('fa-times');
    document.addEventListener('click',click);
    function click(e){
        if(!e.target.matches('.menu-toggle')){
            menu.classList.remove('is-show')
            toggle.classList.remove('fa-times')
            toggle.classList.add('fa-bars')
        }
    }
}