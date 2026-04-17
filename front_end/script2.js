// script2.js

window.onload = function () {
  const data = JSON.parse(localStorage.getItem("portfolioData"));
  if (!data) return;

  // Replace name
  document.querySelector(".logo").textContent = `🔐 ${data.name}`;
  document.querySelector(".hero h1").innerHTML = `Hi, I'm <span>${data.name}</span>`;

  // Replace about
  document.querySelector("#about p").textContent = data.about;

  // Add skills
  const skillsList = document.getElementById("skillsList");
  skillsList.innerHTML = data.skills.map(skill => `<li>${skill}</li>`).join("");

  // Add projects
  const projectContainer = document.getElementById("projectContainer");
  projectContainer.innerHTML = data.projects.map(p => `
    <div class="project-card">
      <h4>${p.title}</h4>
      <p>${p.desc}</p>
    </div>
  `).join("");
};
