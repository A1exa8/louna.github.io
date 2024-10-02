document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', () => {
        img.classList.toggle('enlarged'); // Добавление или удаление класса для увеличения и тени
    });
});