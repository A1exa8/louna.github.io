const button = document.getElementById('change-colors-btn');
        let isDefault = true;

        button.addEventListener('click', function() {
            if (isDefault) {
                // Изменяем фон и цвет текста
                document.body.style.backgroundColor = 'lightblue';
                document.body.style.color = 'violet';
                button.textContent = 'Вернуть исходные цвета';
            } else {
                // Возвращаем исходные цвета
                document.body.style.backgroundColor = 'pink';
                document.body.style.color = 'black';
                button.textContent = 'Сменить цвета';
            }
            isDefault = !isDefault; // Переключаем состояние
        });