const tabs = document.querySelectorAll('.tab');
const slider = document.querySelector('.slider');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const idx = tab.dataset.idx;

    // Slide to the selected panel:
    slider.style.transform = `translateX(-${idx * 100}%)`;

    // Update active state:
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});