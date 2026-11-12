document.querySelectorAll("section").forEach((section, index) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";

    setTimeout(() => {
        section.style.transition = "0.5s ease";
        section.style.opacity = "1";
        section.style.transform = "translateY(0)";
    }, index * 150);
});