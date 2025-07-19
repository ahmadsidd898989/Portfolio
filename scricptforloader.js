
    const percentage = document.getElementById('percentage');
    const percentText = document.getElementById('percentText');
    const preloader = document.getElementById('preloader');
    const mainContent = document.getElementById('main-content');

    const sequence = [
      { value: 0, position: 'calc(95vh - 100px)' },
      { value: 35, position: '65vh' },
      { value: 70, position: '30vh' },
      { value: 100, position: '10vh' },
    ];

    let i = 0;

    function moveAndChange() {
  if (i < sequence.length) {
    const { value, position } = sequence[i];

    percentage.style.top = position;

    // Create a new element each time to avoid sliding old value
    const newText = document.createElement('p');
    newText.className = 'percent-text slide-up';
    newText.textContent = `${value}%`;

    // Clear previous and add new
    percentText.innerHTML = '';
    percentText.appendChild(newText);

    i++;
    setTimeout(moveAndChange, 1500);
  } else {
    preloader.style.transform = 'translateY(-100%)';
    setTimeout(() => {
      preloader.style.display = 'none';
      mainContent.style.display = 'block';
      document.body.style.overflow = 'auto';


       triggerAnimations();
       triggerTextDrop();

    }, 1000);
  }
}

    moveAndChange(); // Start animation