// Get the canvas and its 2D context
const canvas = document.getElementById("hero-canvas");
const ctx = canvas.getContext("2d");

// Resize the canvas to fill the viewport
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Track mouse position for interactivity
const mouse = { x: canvas.width / 2, y: canvas.height / 2 };
document.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

// Particle class definition
class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 3 + 1;
    this.baseRadius = this.radius;
    this.speedX = (Math.random() - 0.5) * 0.7;
    this.speedY = (Math.random() - 0.5) * 0.7;
    this.color = "rgba(255, 255, 255, 0.7)";
  }
  
  update() {
    // Update particle position
    this.x += this.speedX;
    this.y += this.speedY;
    
    // Wrap around canvas edges
    if (this.x < 0) this.x = canvas.width;
    if (this.x > canvas.width) this.x = 0;
    if (this.y < 0) this.y = canvas.height;
    if (this.y > canvas.height) this.y = 0;
    
    // Enlarge particle if near the mouse pointer
    const dx = this.x - mouse.x;
    const dy = this.y - mouse.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < 100) {
      this.radius = this.baseRadius * 3;
    } else {
      this.radius = this.baseRadius;
    }
  }
  
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

// Initialize particles array
const particles = [];
const numParticles = 200; // Adjust to change the number of particles
for (let i = 0; i < numParticles; i++) {
  particles.push(new Particle());
}

// Animation loop for the canvas
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(particle => {
    particle.update();
    particle.draw();
  });
  requestAnimationFrame(animate);
}
animate();

fetch("meta.json")
    .then(response => response.json())
    .then(data => {
        document.title = data.site.title;
        document.querySelector('meta[name="description"]').setAttribute("content", data.site.description);
        document.querySelector('link[rel="icon"]').setAttribute("href", data.site.favicon);
        
        // Open Graph Tags
        document.querySelector('meta[property="og:title"]').setAttribute("content", data.seo.og_title);
        document.querySelector('meta[property="og:description"]').setAttribute("content", data.seo.og_description);
        document.querySelector('meta[property="og:image"]').setAttribute("content", data.seo.og_image);
    })
    .catch(error => console.error("Error loading metadata:", error));
