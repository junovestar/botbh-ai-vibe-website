
export const initScrollAnimations = (): void => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-active');
      }
    });
  }, observerOptions);

  const sections = document.querySelectorAll('.section-animate');
  sections.forEach((section) => {
    observer.observe(section);
  });
};
