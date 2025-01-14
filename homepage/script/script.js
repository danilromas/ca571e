document.addEventListener('DOMContentLoaded', () => {
    const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
    const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

    // Проверка, что элементы найдены
    if (!arrowRight || !arrowLeft) {
        console.error("Не удалось найти элементы стрелок на странице.");
        return;
    }

    let index = 0;

    const activePortfolio = () => {
        const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
        const portfolioDetails = document.querySelectorAll('.portfolio-detail');

        // Добавляем отладочный вывод
        console.log(`Current Index: ${index}`);

        // Обновляем стиль для перемещения слайдов
        imgSlide.style.transform = `translateX(-${index * 100}%)`;

        // Управляем классом "active" для слайдов
        portfolioDetails.forEach((detail, i) => {
            detail.classList.remove('active');
            if (i === index) {
                detail.classList.add('active');
            }
        });
    };

    arrowRight.addEventListener('click', () => {
        if (index < 5) {
            index++;
            arrowLeft.classList.remove('disabled');
        }

        // Делаем кнопку "право" неактивной, когда достигнут последний слайд
        if (index === 5) {
            arrowRight.classList.add('disabled');
        }

        activePortfolio();
    });

    arrowLeft.addEventListener('click', () => {
        if (index > 0) {
            index--;
            arrowRight.classList.remove('disabled');
        }

        // Делаем кнопку "влево" неактивной, когда достигнут первый слайд
        if (index === 0) {
            arrowLeft.classList.add('disabled');
        }

        activePortfolio();
    });
});
