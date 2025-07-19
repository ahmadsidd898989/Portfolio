

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom >= 0;
}

function triggerScrollAnimations() {
  // Animate the underline container
  document.querySelectorAll('.textemail').forEach(el => {
    if (isInViewport(el)) {
      el.classList.add('in-view');
    }
  });

  // Animate each character with delay
  document.querySelectorAll('.textemail').forEach(container => {
    if (isInViewport(container)) {
      const spans = container.querySelectorAll('.spanemail');
      spans.forEach((span, index) => {
        // Add delay via inline style
        span.style.transitionDelay = `${index * 1}s`;
        span.classList.add('in-view');
      });
    }
  });
}

window.addEventListener('scroll', triggerScrollAnimations);
window.addEventListener('load', triggerScrollAnimations);
