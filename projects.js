const projects = [
    {
      title: "Emote System",
      description: "A fully scripted custom Emote System with Emote Inventory.",
      youtube: "https://www.youtube.com/embed/zLS2DaZqrR8?si=7Z1bSdydn9zWxYI9"
    },
    {
        title:"Shop System",
        description: "A complete custom Shop System with easy addition of items.",
        youtube: "https://www.youtube.com/embed/tIVZrzzfNjM?si=EM0arMF4RuJZQCEd",
    },
    {
        title:"Case System",
        description: "A complete custom Case System with easy addition of items.",
        youtube: "https://www.youtube.com/embed/vjU6xEIRebM?si=7Ii2BH-ewsRaKt3N&amp",
    }
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
