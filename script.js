// Typing Effect
const textEl = document.getElementById('typing-text');
const words = ["Interfaces", "Experiences", "Digital Products"];
let wordIdx = 0, charIdx = 0, isDeleting = false;

function type() {
    const currentWord = words[wordIdx];
    textEl.textContent = isDeleting ? currentWord.substring(0, charIdx--) : currentWord.substring(0, charIdx++);
    if (!isDeleting && charIdx === currentWord.length + 1) { isDeleting = true; setTimeout(type, 1500); }
    else if (isDeleting && charIdx === 0) { isDeleting = false; wordIdx = (wordIdx + 1) % words.length; setTimeout(type, 500); }
    else { setTimeout(type, isDeleting ? 50 : 100); }
}
type();

// Particles Background
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
function init() {
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    particles = [];
    for(let i=0; i<60; i++) particles.push({ x: Math.random()*canvas.width, y: Math.random()*canvas.height, vx: Math.random()*0.4-0.2, vy: Math.random()*0.4-0.2, size: 1.5 });
}
function animate() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    ctx.fillStyle = isLight ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)';
    particles.forEach(p => {
        p.x+=p.vx; p.y+=p.vy;
        if(p.x<0 || p.x>canvas.width) p.vx*=-1; if(p.y<0 || p.y>canvas.height) p.vy*=-1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI*2); ctx.fill();
    });
    requestAnimationFrame(animate);
}
init(); animate();

// Theme Toggle
document.getElementById('checkbox').addEventListener('change', (e) => {
    document.documentElement.setAttribute('data-theme', e.target.checked ? 'light' : 'dark');
});

// Scroll Events
window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
    const scroll = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    document.getElementById('progress-bar').style.width = scroll + "%";
});

function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    alert("Discord Tag Copied!");
}
