// Умеешь работать с keypress? Попробуй разобраться в этом файле.
// Вместо keypress можно использовать и стандартный readline.
// Главное не используй всё вместе!

const keypress = require('keypress');
// const player = require('play-sound')((opts = {}));

const Game = require('./Game');
const Hero = require('./game-models/Hero');

// Управление.
// Настроим соответствия нажатий на клавиши и действий в игре.

const keyboard = {
  a: () => console.log('a'),
  w: () => console.log('w'),
  s: () => console.log('s'),
  d: () => console.log('d'),
  b: () => console.log('Space'),
};

// Какая-то функция.

const keyboardFunction = function runInteractiveConsole(hero) {
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

      if (key.name === 'b') {
        hero.boomerang.moveRight(hero);
      }
      // нужно добавить в героях функции для движения вверх и вниз
      if (key.name === 'w' && hero.line !== 0) {
        hero.moveUp();
      }

      if (key.name === 's' && hero.line !== 4) {
        hero.moveDown();
      }

      // if (key.name === 'e') {
      //   this.hero.boomerang.moveRight();

      // player.play('./src/sounds/congratulations.wav', (err) => {
      //   if (err) throw err;
      // });
    }
    // Прерывание программы.
    // (может даже эту часть нужно закомментировать)
    //       if (key.ctrl && key.name === 'c') {
    //         process.exit();
    //       }
    //     }
  });
  process.stdin.setRawMode(true);
};

// Давай попробуем запустить этот скрипт!

// runInteractiveConsole();
module.exports = keyboardFunction;
// module.exports = keyboard;
// экспортировать функцию в Game

// keyboardFunction(this.hero, this.enemy);
// const keyboardFunction = require('./keyboard');
