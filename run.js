// Основной файл.
// Запускает игру.
const Game = require('./src/Game');

// Инициализация игры с настройками.
const name = process.argv[2];
const game = new Game({
  trackLength: 60,
  name,
});

// Запуск игры.
game.play();
//init dev
