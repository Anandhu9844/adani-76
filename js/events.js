function createEventsList() {
  const eventsContainer = document.querySelector('.events-container');
  const events = [
    {
      title: 'Annual Sports Day',
      date: 'October 15, 2023',
      description: 'Join us for a day of athletic excellence and team spirit!',
      image: '/images/events/sports-day.jpg'
    },
    {
      title: 'Cultural Festival',
      date: 'November 5, 2023',
      description: 'Experience diverse cultures through music, dance, and food.',
      image: '/images/events/cultural-fest.jpg'
    },
    // Add more events as needed
  ];
  
  events.forEach(event => {
    const eventItem = document.createElement('div');
    eventItem.className = 'event-item';
    eventItem.innerHTML = `
      <div class="event-image">
        <img src="${event.image}" alt="${event.title}">
      </div>
      <div class="event-content">
        <div class="event-date">${event.date}</div>
        <h3 class="event-title">${event.title}</h3>
        <p>${event.description}</p>
      </div>
    `;
    eventsContainer.appendChild(eventItem);
  });
}