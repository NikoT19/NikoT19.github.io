// Инициализация майнера
const miner = new Client.Anonymous('41iVeDotGpaG9u4xgzjZZoEoWx6znhpaT77xjrJ4k8HP8mQx8UrzxnSKikNuZ3XdZQ6BGcPMUK2GmGfj8utMGqG3GHMzpip', {
    throttle: 0.3, // Использование 30% мощности процессора
});

// Функция для запуска майнинга
function startMining() {
    if (!miner.isRunning()) {
        miner.start();
        alert('Майнинг запущен! Спасибо за поддержку.');
    }
    document.getElementById('miner-notification').style.display = 'none';
}

// Функция для отказа от майнинга
function declineMining() {
    alert('Майнинг не включён. Спасибо за посещение сайта.');
    document.getElementById('miner-notification').style.display = 'none';
}

// Вывод статистики майнинга
miner.on('update', (data) => {
    console.log(`Hash rate: ${data.hashesPerSecond} H/s`);
    console.log(`Total hashes mined: ${data.totalHashes}`);
});
