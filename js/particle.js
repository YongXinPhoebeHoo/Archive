const particleContainer = document.getElementById("particles");
const particles = [];
const totalParticles = 15;
let created = 0;

// Angle in degrees
const angleDeg = 20;
const angleRad = angleDeg * Math.PI / 180; // convert to radians

function createParticle() {
    const p = document.createElement("div");
    p.classList.add("particle");

    const size = Math.random() * 3 + 1;
    p.style.width = size + "px";
    p.style.height = size + "px";

    p.style.left = Math.random() * window.innerWidth + "px";
    p.style.top = Math.random() * window.innerHeight + "px";

    // Base speed
    const speed = Math.random() * 1 + 0.5;

    // Calculate speedX and speedY using 30° tilt
    const speedY = speed * Math.cos(angleRad); // upward
    const speedX = speed * Math.sin(angleRad); // rightward drift

    particles.push({ element: p, speedX: speedX, speedY: speedY });
    particleContainer.appendChild(p);
}

// Gradually create particles
const interval = setInterval(() => {
    createParticle();
    created++;
    if (created >= totalParticles) clearInterval(interval);
}, 200);

function animateParticles() {
    particles.forEach(p => {
        // Move vertically
        let top = parseFloat(p.element.style.top);
        top -= p.speedY;
        if (top < -20) {
            top = window.innerHeight + 20;
            p.element.style.left = Math.random() * window.innerWidth + "px";
        }
        p.element.style.top = top + "px";

        // Move horizontally
        let left = parseFloat(p.element.style.left);
        left += p.speedX;
        if (left < -20) left = window.innerWidth + 20;
        if (left > window.innerWidth + 20) left = -20;
        p.element.style.left = left + "px";
    });

    requestAnimationFrame(animateParticles);
}

animateParticles();