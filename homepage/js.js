document.addEventListener('DOMContentLoaded', function() {
    // Находим все элементы <details> с классом "service"
    const detailsElements = document.querySelectorAll('details');

    detailsElements.forEach(details => {
        const icon = details.querySelector('i');
        
        details.addEventListener('toggle', function() {
            // Проверяем, если элемент открыт (имеет атрибут open)
            if (details.open) {
                icon.classList.replace('bx-plus', 'bx-minus');
            } else {
                icon.classList.replace('bx-minus', 'bx-plus');
            }
        });
    });
});
