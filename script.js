document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) window.scrollTo({ top: target.offsetTop - 70, behavior: "smooth" });
    });
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("show"); });
}, { threshold: 0.1 });

document.querySelectorAll(".fade").forEach(el => observer.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();
