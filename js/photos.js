function createPhotoGallery() {
  const photoGrid = document.querySelector('.photo-grid');
  const photos = Array.from({ length: 20 }, (_, i) => i + 1);
  
  photos.forEach(num => {
    const photoItem = document.createElement('div');
    photoItem.className = 'photo-item';
    photoItem.innerHTML = `<img src="/images/gallery-${num}.jpg" alt="Gallery Photo ${num}">`;
    photoGrid.appendChild(photoItem);
  });
}