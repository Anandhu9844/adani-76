export function toggleMenu() {
  const menu = document.querySelector('.nav-links');
  menu.classList.toggle('active');
}

export function createNavigation() {
  const nav = document.createElement('nav');
  nav.className = 'navbar';

  // Logo section
  const logoSection = document.createElement('div');
  logoSection.className = 'logo-section';
  const logoImg = document.createElement('img');
  logoImg.src = '/assets/indexlogo.png';
  logoImg.alt = 'Logo';
  logoSection.appendChild(logoImg);

  // Hamburger menu
  const hamburger = document.createElement('button');
  hamburger.className = 'hamburger';
  hamburger.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
  `;
  hamburger.addEventListener('click', toggleMenu);

  // Navigation links
  const navLinks = document.createElement('div');
  navLinks.className = 'nav-links';
  
  const links = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/page2.html' },
    { text: 'Contact', href: '#', id: 'contactLink' }
  ];

  links.forEach(link => {
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.text;
    if (link.id) a.id = link.id;
    if (window.location.pathname === link.href) {
      a.setAttribute('aria-current', 'page');
    }
    navLinks.appendChild(a);
  });

  nav.appendChild(logoSection);
  nav.appendChild(hamburger);
  nav.appendChild(navLinks);

  // Add contact modal
  const contactModal = createContactModal();
  document.body.appendChild(contactModal);

  // Add click handler for contact link
  const contactLink = nav.querySelector('#contactLink');
  contactLink.addEventListener('click', (e) => {
    e.preventDefault();
    const modal = document.getElementById('contactModal');
    modal.style.display = 'block';
  });

  // Add click handler to close modal
  const closeButton = contactModal.querySelector('.close-button');
  closeButton.addEventListener('click', () => {
    contactModal.style.display = 'none';
  });

  // Close modal when clicking outside
  window.addEventListener('click', (e) => {
    if (e.target === contactModal) {
      contactModal.style.display = 'none';
    }
  });

  return nav;
}

import { createContactModal } from './ContactModal.js';
