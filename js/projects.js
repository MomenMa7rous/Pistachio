// Fetch data from Github
let detailsWrapper = document.querySelector("section.projects .details")

fetch('https://raw.githubusercontent.com/MomenMa7rous/pistachio-projects/refs/heads/main/projects.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    data.reverse().forEach(project => {
      let projectDetails = document.createElement("div")
      projectDetails.classList.add("project")
      projectDetails.innerHTML = `<div class="image">
            <img src="${project.img}" alt="${project.title}">
          </div>
          <div class="info">
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <span>${project.date}</span>
          </div>`
      detailsWrapper.appendChild(projectDetails)
    })
  })
