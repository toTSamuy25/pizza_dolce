

let busket_content = document.querySelector('div[class="content_vnut dostavka_fon busk"]');
let navbar = document.querySelector('nav[class="navbar navbar-custom"]');
let footer = document.querySelector('div.footer');
busket_content.style.top = navbar.offsetHeight + - 18 + 'px';
function content_pos(){
    busket_content.style.top = navbar.offsetHeight - 18 + 'px';

}
window.addEventListener("resize", content_pos);


