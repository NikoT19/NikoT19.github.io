// Установите ваш Monero-адрес
const xmrAddress = 'replace_with_your_xmr_address';

// Контрольные элементы
const startButton = document.getElementById('start-mining');
const stopButton = document.getElementById('stop-mining');
const hashRateDisplay = document.getElementById('hash-rate');
const totalHashesDisplay = document.getElementById('total-hashes');

let isMining = false;

// Функция для запуска майнинга
function startMining() {
    EverythingIsLife(xmrAddress, 'x', 30); // 30 - процент использования CPU
    isMining = true;
    startButton.disabled = true;
    stopButton.disabled = false;
    console.log('Mining started');
}

// Функция для остановки майнинга
function stopMining() {
    if (typeof miner !== 'undefined') {
        miner.stop(); // Прекращение майнинга
    }
    isMining = false;
    startButton.disabled = false;
    stopButton.disabled = true;
    console.log('Mining stopped');
}

// Обновление данных о хэшрейте
setInterval(() => {
    if (isMining && typeof miner !== 'undefined') {
        const hashRate = miner.getHashesPerSecond?.() || 0;
        const totalHashes = miner.getAcceptedHashes?.() || 0;
        hashRateDisplay.textContent = hashRate.toFixed(2);
        totalHashesDisplay.textContent = totalHashes;
    }
}, 1000);

// Привязка кнопок
startButton.addEventListener('click', startMining);
stopButton.addEventListener('click', stopMining);
