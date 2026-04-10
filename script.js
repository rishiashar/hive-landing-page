const animatedSections = document.querySelectorAll("[data-animate]");

if (animatedSections.length) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  animatedSections.forEach(section => observer.observe(section));
}
