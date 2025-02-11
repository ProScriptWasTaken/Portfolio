const projects = [
    {
      title: "Emote System",
      description: "A fully scripted custom Emote System with Emote Inventory.",
      youtube: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
  ];

  function loadProjects() {
    const container = document.getElementById("projects-container");

    projects.forEach((project, index) => {
      const projectElement = document.createElement("div");
      projectElement.classList.add("project-card");
      projectElement.style.animation = `fadeIn 1s ease-in-out ${index * 0.2}s forwards`;

      projectElement.innerHTML = `
        <div class="project-header">
          <h3>${project.title}</h3>
        </div>
        <p>${project.description}</p>
        <div class="video-wrapper">
          <iframe src="${project.youtube}" frameborder="0" allowfullscreen></iframe>
        </div>
      `;
      container.appendChild(projectElement);
    });
  }

  window.onload = loadProjects;
