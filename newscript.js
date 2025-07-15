
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('inview');
        observer.unobserve(entry.target); // Remove this line if you want repeat on scroll
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.sanimate').forEach(el => {
    observer.observe(el);
  });