// Parallax

const layers = document.querySelectorAll(".parallax");

window.addEventListener("scroll", () => {
    layers.forEach((layer) => {
        const parallax = `translate(0, -${
            window.pageYOffset * layer.getAttribute("data-parallax")
        }px)`;
        layer.style.transform = parallax;
    });
});

// Intersection observer

const sections = document.querySelectorAll("section");

function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
        const { isIntersecting, target } = entry;
        if (isIntersecting) {
            target.classList.add("visible");
            observer.unobserve(target);
        }
    });
}

const observer = new IntersectionObserver(handleIntersect, {
    threshold: 0.2,
});

sections.forEach((section) => {
    const sectionChildren = [...section.children];
    sectionChildren.forEach((child, index) => {
        observer.observe(child);
        child.style.setProperty("--transition-delay", `${index * 0.1}s`);
    });
});
