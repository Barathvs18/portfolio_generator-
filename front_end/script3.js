

window.onload = function () {
  const data = JSON.parse(localStorage.getItem("portfolioData"));
  if (!data) return;

  // Update Name
  document.querySelector(".logo").textContent = `👨‍💻 ${data.name}`;
  document.querySelector(".hero h1").innerHTML = `Hello, I'm <span>${data.name}</span>`;

  // Update About
  document.querySelector("#about p").textContent = data.about;

  // Update Skills
  const skillsList = document.getElementById("skillsList");
  skillsList.innerHTML = data.skills.map(skill => `<li>${skill}</li>`).join("");

  // Update Projects
  const projectContainer = document.getElementById("projectContainer");
  projectContainer.innerHTML = data.projects.map(project => `
    <div class="project-card">
      <h4>${project.title}</h4>
      <p>${project.desc}</p>
    </div>
  `).join("");
};
