// Last login time display
(function() {
    const loginElement = document.getElementById('last-login-time');
    if (loginElement) {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const now = new Date();
        const formatted = days[now.getDay()] + ' ' + months[now.getMonth()] + ' ' + now.getDate() + ' ' + 
            now.getHours().toString().padStart(2, '0') + ':' + 
            now.getMinutes().toString().padStart(2, '0') + ':' + 
            now.getSeconds().toString().padStart(2, '0');
        loginElement.textContent = formatted;
    }
})();

// Carousel functionality
document.querySelectorAll('.gallery-item.carousel').forEach(carousel => {
    const images = carousel.querySelectorAll('.carousel-images img');
    const indexDisplay = carousel.querySelector('.carousel-index');
    let currentIndex = 0;

    function updateCarousel() {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === currentIndex);
        });
        indexDisplay.textContent = `${currentIndex + 1} of ${images.length}`;
    }

    carousel.querySelector('.arrow.left').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    });

    carousel.querySelector('.arrow.right').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    });

    updateCarousel();
});
