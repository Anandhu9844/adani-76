function initializeFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    question.addEventListener('click', () => {
      const isActive = answer.classList.contains('active');
      
      // Close all other answers
      document.querySelectorAll('.faq-answer').forEach(a => {
        a.classList.remove('active');
        a.previousElementSibling.querySelector('i').style.transform = 'rotate(0deg)';
      });
      
      // Toggle current answer
      if (!isActive) {
        answer.classList.add('active');
        question.querySelector('i').style.transform = 'rotate(180deg)';
      }
    });
  });
}