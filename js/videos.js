function createVideoGallery() {
  const videoGrid = document.querySelector('.video-grid');
  const videos = Array.from({ length: 20 }, (_, i) => i + 1);
  
  videos.forEach(num => {
    const videoItem = document.createElement('div');
    videoItem.className = 'video-item';
    videoItem.innerHTML = `
      <video controls>
        <source src="/videos/college-video-${num}.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    `;
    videoGrid.appendChild(videoItem);
  });
}