// Mobile menu
let menu = document.getElementById("menu")
let overlay = document.getElementById("overlay")
let menubtn = document.getElementById("menubtn")
let closemenu = document.getElementById("closemenu")

menubtn.addEventListener("click", () => {
  menu.classList.toggle("active")
  overlay.classList.toggle("active")
})
closemenu.addEventListener("click", () => {
  menu.classList.remove("active")
  overlay.classList.remove("active")
})