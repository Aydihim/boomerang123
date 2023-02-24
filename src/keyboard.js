// Умеешь работать с keypress? Попробуй разобраться в этом файле.
// Вместо keypress можно использовать и стандартный readline.
// Главное не используй всё вместе!

const keypress = require('keypress');
const player = require('play-sound')(opts = {})
const Hero = require('./game-models/Hero');
// Управление.
// Настроим соответствия нажатий на клавиши и действий в игре.

const keyboard = {
  a: () => console.log('a'),
  w: () => console.log('w'),
  s: () => console.log('s'),
  d: () => console.log('d'),
  e: () => console.log('e'),
  Space: () => console.log('Space'),
};

// Какая-то функция.

const keyboardFunction = function runInteractiveConsole() {
  keypress(process.stdin);
  process.stdin.on('keypress', (ch, key) => {
    if (key) {
      // Вызывает команду, соответствующую нажатой кнопке.
      if (key.name === 'd') {
        hero.moveRight();
      }

      if (key.name === 'a') {
        hero.moveLeft();
      }

      if (key.name === 'Space') {
        hero.boomerang.moveRight(hero);
      }
// нужно добавить в героях функции для движения вверх и вниз
      if (key.name === 'w' && hero.position1 !== 0) {
        hero.moveUp();
      }

      if (key.name === 's' && hero.position1 !== 2) {
        hero.moveDown();
      }

      if (key.name === 'e') {
        hero.boomerang.moveRight(hero);

        player.play('./src/sounds/congratulations.wav', (err) => {
          if (err) throw err;
        });
      }
      // Прерывание программы. 
      // (может даже эту часть нужно закомментировать)
      if (key.ctrl && key.name === 'c') {
        process.exit();
      }
    }
  });
  process.stdin.setRawMode(true);
}

// Давай попробуем запустить этот скрипт!

runInteractiveConsole();
module.exports = keyboardFunction;
// экспортировать функцию в Game

// keyboardFunction(this.hero, this.enemy);
// const keyboardFunction = require('./keyboard');