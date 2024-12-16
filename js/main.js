// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  createImageSlider();
  createFAQ();
  initializeHeader();
  createTestimonials();
});

// Header Animation
function initializeHeader() {
  const header = document.querySelector('.header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      header.style.transform = 'translateY(0)';
    } else if (currentScroll > lastScroll) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;
  });
}

// Create Testimonials
function createTestimonials() {
  const testimonialGrid = document.querySelector('.testimonials-grid');
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Computer Science Student",
      image: "/images/testimonial-1.jpg",
      quote: "The vibrant campus life and supportive faculty have made my college experience unforgettable!"
    },
    {
      name: "Michael Chen",
      role: "Engineering Major",
      image: "/images/testimonial-2.jpg",
      quote: "The hands-on learning opportunities here are incredible. I've grown both personally and professionally."
    },
    {
      name: "Emily Rodriguez",
      role: "Business Student",
      image: "/images/testimonial-3.jpg",
      quote: "From clubs to internships, this college offers everything you need to succeed."
    },
    {
      name: "David Kim",
      role: "Arts & Design Student",
      image: "/images/testimonial-4.jpg",
      quote: "The creative environment and state-of-the-art facilities have helped me push my boundaries."
    }
  ];

  testimonials.forEach(testimonial => {
    const div = document.createElement('div');
    div.className = 'testimonial';
    div.innerHTML = `
      <img src="${testimonial.image}" alt="${testimonial.name}">
      <h3>${testimonial.name}</h3>
      <p class="role">${testimonial.role}</p>
      <p class="quote">${testimonial.quote}</p>
    `;
    testimonialGrid.appendChild(div);
  });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});