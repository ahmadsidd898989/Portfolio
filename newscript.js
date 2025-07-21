
function isInViewport(el) {
   const rect = el.getBoundingClientRect();
   return rect.top < window.innerHeight; // triggers as soon as visible
}


function triggerTextDrop() {
  document.querySelectorAll('.drop-text1').forEach(el => {
    if (isInViewport(el) && !el.classList.contains('in-view')) {
      el.classList.add('in-view');
    }
  });
}

window.addEventListener('scroll', triggerTextDrop);
window.addEventListener('load', triggerTextDrop);


function isInViewport(el) {
   const rect = el.getBoundingClientRect();
   return rect.top < window.innerHeight; // triggers as soon as visible
}

  function triggerSpanAppear() {
    document.querySelectorAll('.text span').forEach(span => {
      if (isInViewport(span) && !span.classList.contains('appear')) {
        span.classList.add('appear');
      }
    });
  }

  window.addEventListener('scroll', triggerSpanAppear);
  window.addEventListener('load', triggerSpanAppear);


  //animation for email 

function isInViewport(el) {
   const rect = el.getBoundingClientRect();
   return rect.top < window.innerHeight; // triggers as soon as visible
}


function triggerEmailSpanAppear() {
  document.querySelectorAll('.spanemail').forEach((span) => {
    if (isInViewport(span) && !span.classList.contains('appear')) {
      span.classList.add('appear');
    }
  });
}

window.addEventListener('scroll', triggerEmailSpanAppear);
window.addEventListener('load', triggerEmailSpanAppear);


function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

function handleFooterFadeIn() {
  const footer = document.querySelector('footer');
  if (footer && isInViewport(footer)) {
    footer.classList.add('in-view');
  }
}

window.addEventListener('scroll', handleFooterFadeIn);
window.addEventListener('load', handleFooterFadeIn);

