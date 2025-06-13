const carousel = document.querySelector('.gallery-item.carousel');
const images = carousel.querySelectorAll('.carousel-images img');
const indexDisplay = carousel.querySelector('.carousel-index');
let currentIndex = 0;

function updateCarousel() {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === currentIndex);
    });
    indexDisplay.textContent = `${currentIndex + 1}  of  ${images.length}`;
}

carousel.querySelector('.arrow.left').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
});

carousel.querySelector('.arrow.right').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
});

// initialize display
updateCarousel();
