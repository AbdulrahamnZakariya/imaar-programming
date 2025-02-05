document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll("h1, h2, p, li, button");
    let delay = 0.2;
    
    elements.forEach(el => {
        el.style.animationDelay = `${delay}s`;
        delay += 0.15;
    });
});
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".section-image");
    images.forEach((img, index) => {
        setTimeout(() => {
            img.style.opacity = "1";
            img.style.transform = "translateY(0)";
        }, index * 200); // تأخير بسيط لكل صورة لجعل الحركة متسلسلة
    });
});

