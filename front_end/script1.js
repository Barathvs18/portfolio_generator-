window.onload = function () {
  const data = JSON.parse(localStorage.getItem("portfolioUserData"));
  if (!data) return;

  // Set Name and Tagline
  document.querySelector("#hero h2").innerHTML = `Hi, I'm <span class="highlight">${data.name}</span>`;
  document.querySelector("#hero p").textContent = data.tagline;

  // About Section
  document.querySelector("#about p").textContent = data.about;

  // Skills
  const skillsList = document.getElementById("skillsList");
  skillsList.innerHTML = data.skills.map(skill => `<li>${skill}</li>`).join('');

  // Projects
  const projectContainer = document.getElementById("projectContainer");
  projectContainer.innerHTML = data.projects.map(p => `
    <div class="project-card">
      <h4>${p.title}</h4>
      <p>${p.desc}</p>
    </div>
  `).join('');
};
