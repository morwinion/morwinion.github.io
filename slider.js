document.addEventListener('DOMContentLoaded', () => {
  const prevBtn = document.querySelector('.slider-btn.prev');
  const nextBtn = document.querySelector('.slider-btn.next');
  const slidesContainer = document.querySelector('.slides-container');
  const slides = document.querySelectorAll('.slide');

  let currentIndex = 0;

  function updateSlider() {
    const slideWidth = slides[0].clientWidth;
    slidesContainer.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  });

  updateSlider();
  window.addEventListener('resize', updateSlider);
});
