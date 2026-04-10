document.querySelectorAll('[data-animate]').forEach(el => {
  new IntersectionObserver(([entry], obs) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    }
  }, { threshold: 0.1 }).observe(el);
});
