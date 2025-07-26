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

// Fetch Projects From Github
let projectsWrapper = document.querySelector("section.projects .wrapper")

fetch('https://raw.githubusercontent.com/MomenMa7rous/pistachio-projects/refs/heads/main/projects.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    data.reverse().slice(0,4).forEach(project => {
      let projectContainer = document.createElement("div")
      projectContainer.classList.add("project", "wow", "fadeInUp")
      projectContainer.innerHTML = `<img src="${project.img}" alt="${project.title}">`
      projectsWrapper.appendChild(projectContainer)
    })
  })