const items = document.querySelectorAll('.accordion-item');

items.forEach(item => {
  const header = item.querySelector('.accordion-header');
  const toggle = item.querySelector('.toggle');

  header.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    // Close all items
    items.forEach(i => {
      i.classList.remove('active');
      i.querySelector('.toggle').textContent = '+';
    });

    // Open the clicked item if it was not already active
    if (!isActive) {
      item.classList.add('active');
      toggle.textContent = '−';
    }
  });
});