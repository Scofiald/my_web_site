// === Partikül Arka Plan ===
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
for (let i = 0; i < 60; i++) { // daha az partikül
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 1.5,
    speedX: (Math.random() - 0.5) * 0.5,
    speedY: (Math.random() - 0.5) * 0.5,
    opacity: Math.random() * 0.6 + 0.2
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.x += p.speedX;
    p.y += p.speedY;

    if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
    if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

    ctx.beginPath();
    ctx.fillStyle = `rgba(120,255,255,${p.opacity})`;
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// === Fareye göre arka planın yumuşak tepkisi ===
let timeout;
document.addEventListener('mousemove', (e) => {
  clearTimeout(timeout);
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  const hue = 190 + x * 20; // mavi ton aralığı
  const light = 6 + y * 4; // parlaklık değişimi
  document.body.style.background = 
    `radial-gradient(circle at ${x*100}% ${y*100}%, hsl(${hue}, 60%, ${light}%) 0%, #000 100%)`;
  timeout = setTimeout(() => {
    document.body.style.background = 
      `radial-gradient(circle at center, #050510 0%, #000 100%)`;
  }, 800);
});
const sidebar = document.querySelector('.sidebar');
const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active'); // active sınıfını ekle/kaldır
});
const closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('active'); // active sınıfını kaldır
});