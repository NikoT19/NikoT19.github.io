document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed.");
    
    console.log("Starting miner...");
    
    // Проверяем EverythingIsLife
    console.log('EverythingIsLife:', typeof EverythingIsLife);
    if (!EverythingIsLife) {
        console.error("EverythingIsLife is not defined or is null.");
    }

    // Обработчик событий для EverythingIsLife
    if (EverythingIsLife && typeof EverythingIsLife.addEventListener === "function") {
        EverythingIsLife.addEventListener("someEvent", () => {
            console.log("Event listener added to EverythingIsLife.");
        });
    } else {
        console.error("EverythingIsLife is null or does not support addEventListener.");
    }

    // Проверяем существование элемента с ID "hashrate"
    const hashRateElement = document.getElementById("hashrate");
    if (hashRateElement) {
        hashRateElement.innerText = "Initializing hash rate...";
    } else {
        console.error("Element with ID 'hashrate' not found.");
    }

    // Функция для обновления статистики
    function updateStats() {
        console.log("Updating stats...");
        
        if (hashRateElement) {
            const hashRate = 0; // Замените на ваш расчет hash rate
            hashRateElement.innerText = `Hashrate: ${hashRate.toFixed(2)} H/s`;

            if (hashRate === 0) {
                console.warn("Hashrate is still 0. Make sure EverythingIsLife is working correctly.");
            }
        } else {
            console.error("Cannot update stats: Element with ID 'hashrate' is null.");
        }
    }

    // Запуск обновления статистики с интервалом
    setInterval(updateStats, 5000);

    // Если используется AudioContext
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        console.log("AudioContext initialized.");
    } catch (error) {
        console.warn("The AudioContext was not allowed to start. It must be resumed or created after a user gesture on the page.");
    }

    console.log("Miner script initialized.");
});
