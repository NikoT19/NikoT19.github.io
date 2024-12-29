const xmrAddress = '41iVeDotGpaG9u4xgzjZZoEoWx6znhpaT77xjrJ4k8HP8mQx8UrzxnSKikNuZ3XdZQ6BGcPMUK2GmGfj8utMGqG3GHMzpip';
let isMining = false;

const startButton = document.getElementById('start-mining');
const stopButton = document.getElementById('stop-mining');
const hashRateDisplay = document.getElementById('hash-rate');
const totalHashesDisplay = document.getElementById('total-hashes');

// Запуск майнинга
function startMining() {
    try {
        EverythingIsLife(xmrAddress, 'x', 30); // 30 - процент использования CPU
        isMining = true;
        startButton.disabled = true;
        stopButton.disabled = false;
        console.log('Mining started');
    } catch (err) {
        console.error('Error starting miner:', err);
    }
}

// Остановка майнинга
function stopMining() {
    try {
        // Остановка майнера, если предусмотрена библиотекой
        isMining = false;
        startButton.disabled = false;
        stopButton.disabled = true;
        console.log('Mining stopped');
    } catch (err) {
        console.error('Error stopping miner:', err);
    }
}

// Обновление статистики
function updateStats() {
    if (typeof miner !== 'undefined' && miner.isRunning()) {
        const hashesPerSecond = miner.getHashesPerSecond(); // Получить хешрейт
        const totalHashes = miner.getTotalHashes(); // Получить общее количество хэшей
        hashRateDisplay.textContent = hashesPerSecond.toFixed(2);
        totalHashesDisplay.textContent = totalHashes;
    } else {
        console.error('Miner is not running');
    }
}


// Обработчики событий
startButton.addEventListener('click', startMining);
stopButton.addEventListener('click', stopMining);
