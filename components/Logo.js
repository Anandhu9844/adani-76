export function Logo() {
  const container = document.createElement('div');
  container.className = 'logo';
  
  const logo = document.createElement('img');
  logo.src = '/assets/img76.png';
  logo.alt = 'Website Logo';
  logo.className = 'logo-image';
  
  container.appendChild(logo);
  return container;
}