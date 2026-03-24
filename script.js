
// Scroll fade-up — lightweight IntersectionObserver only
const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            e.target.style.opacity = '1';
            e.target.style.transform = 'translateY(0)';
        }
    });
});

document.querySelectorAll('.fade-up').forEach((el, i) => {
    el.style.transitionDelay = (i % 5 * 0.08) + 's';
    obs.observe(el);
});

// Active nav on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(a => a.classList.remove('active'));
            const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
            if (active) active.classList.add('active');
        }
    });
}, { threshold: 0.4 });

sections.forEach(s => navObserver.observe(s));

// Custom cursor
const cursor = document.getElementById('cursor');
const trail = document.getElementById('cursorTrail');
let mx = 0, my = 0;
document.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top = my + 'px';
});
setInterval(() => {
    trail.style.left = mx + 'px';
    trail.style.top = my + 'px';
}, 80);