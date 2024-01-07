
// Отримання всіх елементів з класом 'counter-number'
let counters = document.querySelectorAll('.counter-number');
let isCounting = false;

function checkCounterVisibility() {
    // Перевірка, чи перший лічильник видимий на екрані
    if (counters[0].getBoundingClientRect().top <= window.innerHeight && !isCounting) {
        isCounting = true;

        counters.forEach(counter => {
            function updateCounter() {
                // Отримання значення 'data-target' та перетворення його в число
                let target = +counter.getAttribute('data-target');

                // Отримання поточного числа в лічильнику та перетворення його в число
                let currentNumber = +counter.innerText;

                // Визначення швидкості збільшення числа в лічильнику
                let speed = target / 900;

                // Перевірка, чи поточне число менше за цільове
                if (currentNumber < target) {
                    // Збільшення поточного числа
                    counter.innerText = Math.ceil(currentNumber + speed);

                    // Виклик функції updateCounter кожну 1 мс
                    setTimeout(updateCounter, 1);
                } else {
                    // Задання поточного числа рівним цільовому
                    counter.innerText = target;
                }
            }

            // Виклик функції updateCounter
            updateCounter();
        });
    }
}

// Додавання обробника подій прокрутки до вікна
window.addEventListener('scroll', checkCounterVisibility);

// Перевірка видимості лічильників після завантаження сторінки
checkCounterVisibility();