window.onload=inicio();

function inicio(){
    const icon_menu = document.querySelector(`.icon-menu`);
    
    icon_menu.addEventListener(`click`,open);
}


function open(){
    var menu = document.querySelector(`.menu`);
    menu.classList.toggle(`open`);
 }