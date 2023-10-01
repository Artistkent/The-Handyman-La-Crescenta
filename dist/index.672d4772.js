// Implement Intersection Observer for animations or loading as elements come into view
const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
};
const observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
        }
    });
}, options);
const serviceCards = document.querySelectorAll(".service-card");
serviceCards.forEach((card)=>{
    observer.observe(card);
});

//# sourceMappingURL=index.672d4772.js.map
