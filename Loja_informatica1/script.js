document.addEventListener('DOMContentLoaded', function() {
    let index = 0; 
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function showSlide() {
        slides.forEach(slide => slide.style.display = 'none');
        
        slides[index].style.display = 'block';
    }

    function nextSlide() {
        index = (index + 1) % totalSlides; 
        showSlide();
    }

    // Ir para o slide anterior
    function prevSlide() {
        index = (index - 1 + totalSlides) % totalSlides; 
        showSlide();
    }

    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);

    showSlide();
});
