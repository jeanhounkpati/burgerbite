
let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".nav-bar-link");
menu.onclick=()=>{
    console.log("hello");
    menu.classList.toggle('fa-times.active');
    navbar.classList.toggle('active');

}