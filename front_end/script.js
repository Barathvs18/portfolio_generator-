function addProject() {
  const container = document.getElementById('projectsContainer');
  const div = document.createElement('div');
  div.className = 'project';
  div.innerHTML = `
    <input type="text" placeholder="Project Title" class="project-title" required />
    <textarea placeholder="Project Description" class="project-desc" required></textarea>
  `;
  container.appendChild(div);
}

function addCertificate() {
  const container = document.getElementById('certificatesContainer');
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Certificate Name';
  input.className = 'cert-name';
  container.appendChild(input);
}

document.getElementById('portfolioForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('fullName').value;
  const role = document.getElementById('role').value;
  const about = document.getElementById('about').value;
  const skills = document.getElementById('skills').value.split(',').map(skill => skill.trim());

  const projects = Array.from(document.querySelectorAll('.project')).map(project => ({
    title: project.querySelector('.project-title').value,
    description: project.querySelector('.project-desc').value
  }));

  const certificates = Array.from(document.querySelectorAll('.cert-name')).map(input => input.value).filter(Boolean);

  // Save data to localStorage or pass via query param or show preview
  localStorage.setItem('portfolioData', JSON.stringify({ name, role, about, skills, projects, certificates }));

  // Navigate to generated portfolio page
  window.location.href = 'portfolio.html';
});
