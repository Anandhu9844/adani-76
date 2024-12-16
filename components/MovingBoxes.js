import { boxImages } from './ImageData.js';

export function createMovingBoxes() {
  const container = document.createElement('div');
  container.className = 'moving-boxes-container';

  const track = document.createElement('div');
  track.className = 'moving-boxes-track';

  // Create boxes twice to ensure seamless infinite scroll
  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < 12; i++) {
      const box = document.createElement('div');
      box.className = 'moving-box';
      
      const img = document.createElement('img');
      img.src = boxImages[i].url;
      img.alt = boxImages[i].alt;
      img.className = 'box-image';
      
      const number = document.createElement('span');
      number.className = 'box-number';
      number.textContent = i + 1;
      
      const likeButton = document.createElement('button');
      likeButton.className = 'like-button';
      likeButton.innerHTML = `
        <svg viewBox="0 0 24 24" class="heart-icon">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      `;
      
      // Add like functionality
      likeButton.addEventListener('click', (e) => {
        e.stopPropagation();
        likeButton.classList.toggle('liked');
      });
      
      box.appendChild(img);
      box.appendChild(number);
      box.appendChild(likeButton);
      track.appendChild(box);
    }
  }

  container.appendChild(track);

  // Add manual scroll functionality
  let isDown = false;
  let startX;
  let scrollLeft;
  let animationPaused = false;

  container.addEventListener('mousedown', (e) => {
    isDown = true;
    container.classList.add('active');
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    animationPaused = true;
    track.style.animationPlayState = 'paused';
  });

  container.addEventListener('mouseleave', () => {
    isDown = false;
    container.classList.remove('active');
    animationPaused = false;
    track.style.animationPlayState = 'running';
  });

  container.addEventListener('mouseup', () => {
    isDown = false;
    container.classList.remove('active');
    animationPaused = false;
    track.style.animationPlayState = 'running';
  });

  container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2;
    container.scrollLeft = scrollLeft - walk;
  });

  return container;
}