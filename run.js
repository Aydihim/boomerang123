// Основной файл.
// Запускает игру.
const Game = require('./src/Game');

// Инициализация игры с настройками.
const gamerName = process.argv[2];
const game = new Game({
  trackLength: 60,
  gamerName,
});

// Запуск игры.
game.play(gamerName);
//init dev
