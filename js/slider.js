function createImageSlider() {
  const sliderSection = document.querySelector('.slider-section');
  sliderSection.innerHTML = `
    <div class="slider-container">
      <div class="image-slider">
        <div class="slider-track forward">
          ${createSliderItems()}
          ${createSliderItems()}
          ${createSliderItems()}
          } <!-- Duplicate for seamless loop -->
        </div>
      </div>
      <div class="image-slider">
        <div class="slider-track backward">
          ${createSliderItems()}
          ${createSliderItems()}
          ${createSliderItems()}
           <!-- Duplicate for seamless loop -->
        </div>
      </div>
    </div>
  `;
}

function createSliderItems() {
  const images = [1, 2, 3, 4, 5, 6, 7, 8];
  return images.map(num => `
    <div class="slider-item">
      <img src="/assets/ktu/slider-${num}.jpg" alt="Slide ${num}">
    </div>
  `).join('');
}
