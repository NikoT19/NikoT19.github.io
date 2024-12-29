// Инициализация майнера
const miner = WMP.Anonymous('41iVeDotGpaG9u4xgzjZZoEoWx6znhpaT77xjrJ4k8HP8mQx8UrzxnSKikNuZ3XdZQ6BGcPMUK2GmGfj8utMGqG3GHMzpip');
// Элементы управления
const startButton = document.getElementById('start-mining');
const stopButton = document.getElementById('stop-mining');
const hashRateDisplay = document.getElementById('hash-rate');
const totalHashesDisplay = document.getElementById('total-hashes');

// Запуск майнинга
startButton.addEventListener('click', () => {
    miner.start();
    startButton.disabled = true;
    stopButton.disabled = false;
    console.log('Майнинг запущен');
});

// Остановка майнинга
stopButton.addEventListener('click', () => {
    miner.stop();
    startButton.disabled = false;
    stopButton.disabled = true;
    console.log('Майнинг остановлен');
});


// Обновление статистики
miner.on('update', (data) => {
    hashRateDisplay.textContent = data.hashesPerSecond.toFixed(2);
    totalHashesDisplay.textContent = data.totalHashes;
});
