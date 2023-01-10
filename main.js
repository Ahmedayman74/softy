let menu = document.querySelector(".menu-icons")
let navbar =document.querySelector(".nav-bar ul")
let menuSpans = document.querySelectorAll(".menu-icons span")

console.log(menuSpans[0,2])

menu.onclick= ()=> {
    navbar.classList.toggle("show")
    menuSpans[0].classList.toggle("transform")
    menuSpans[2].classList.toggle("transform")
    menuSpans[0].classList.toggle("frist")
    menuSpans[2].classList.toggle("last")
    menuSpans[1].classList.toggle("hide")
}