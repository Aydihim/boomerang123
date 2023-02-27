// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
// const Boomerang = require('./game-models/Boomerang');
const { Gamer } = require('../db/models');
const View = require('./View');
const Boomerang = require('./game-models/Boomerang');
const keyboardFunction = require('./keyboard');
const keyboard = require('./keyboard');
// const gamer = require('../db/models/gamer');

// let score = 0;
let time = 0;

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.
const createData = async (name, score) => {
  await Gamer.create(
    {
      name,
      score,
    },
    { logging: false }
  );
};

class Game {
  constructor({ trackLength, gamerName }) {
    this.trackLength = trackLength;
    this.gamerName = gamerName;
    this.hero = new Hero(); // Герою можно аргументом передать бумеранг.
    this.enemy1 = new Enemy();
    this.enemy2 = new Enemy();
    this.enemy3 = new Enemy();
    this.enemy4 = new Enemy();
    this.enemy5 = new Enemy();
    this.view = new View();
    // this.boomerang = new Boomerang();
    // this.track1 = [];
    // this.track2 = [];
    // this.track3 = [];
    // this.track4 = [];
    // this.track5 = [];
    this.board = [];
    this.les1 = [];
    this.les2 = [];
    this.score = 0;
    // keyboard.a = () => this.hero.moveLeft();
    // keyboard.d = () => this.hero.moveRight();
    // keyboard.w = () => this.hero.moveUp();
    // keyboard.s = () => this.hero.moveDown();
    // keyboard.b = () => {
    //   this.boomerang.fly(this.hero.pos, this.hero.line);
    // };
    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    // this.track1 = new Array(this.trackLength).fill(' ');
    // this.track2 = new Array(this.trackLength).fill(' ');
    // this.track3 = new Array(this.trackLength).fill(' ');
    // this.track4 = new Array(this.trackLength).fill(' ');
    // this.track5 = new Array(this.trackLength).fill(' ');

    this.board = [
      new Array(this.trackLength).fill(' '),
      new Array(this.trackLength).fill(' '),
      new Array(this.trackLength).fill(' '),
      new Array(this.trackLength).fill(' '),
      new Array(this.trackLength).fill(' '),
    ];
    this.les1 = new Array(30).fill('🌳');
    this.les2 = new Array(30).fill('🌳');
    this.board[this.hero.line][this.hero.pos] = this.hero.skin;
    this.board[this.hero.boomerang.line][this.hero.boomerang.pos] =
      this.hero.boomerang.skin;
    this.board[this.enemy1.line][this.enemy1.pos] = this.enemy1.skin;
    this.board[this.enemy2.line][this.enemy2.pos] = this.enemy2.skin;
    this.board[this.enemy3.line][this.enemy3.pos] = this.enemy3.skin;
    this.board[this.enemy4.line][this.enemy4.pos] = this.enemy4.skin;
    this.board[this.enemy5.line][this.enemy5.pos] = this.enemy5.skin;
  }

  async check(gamerName) {
    if (
      (this.enemy1.pos === this.hero.boomerang.pos &&
        this.enemy1.line === this.hero.boomerang.line) ||
      (this.enemy1.pos === this.hero.boomerang.pos + 1 &&
        this.enemy1.line === this.hero.boomerang.line) ||
      (this.enemy1.pos === this.hero.boomerang.pos - 1 &&
        this.enemy1.line === this.hero.boomerang.line)
    ) {
      this.score += 100;
      this.enemy1.die();
    }
    if (
      (this.enemy2.pos === this.hero.boomerang.pos &&
        this.enemy2.line === this.hero.boomerang.line) ||
      (this.enemy2.pos === this.hero.boomerang.pos + 1 &&
        this.enemy2.line === this.hero.boomerang.line) ||
      (this.enemy2.pos === this.hero.boomerang.pos - 1 &&
        this.enemy2.line === this.hero.boomerang.line)
    ) {
      this.score += 100;
      this.enemy2.die();
    }
    if (
      (this.enemy3.pos === this.hero.boomerang.pos &&
        this.enemy3.line === this.hero.boomerang.line) ||
      (this.enemy3.pos === this.hero.boomerang.pos + 1 &&
        this.enemy3.line === this.hero.boomerang.line) ||
      (this.enemy3.pos === this.hero.boomerang.pos - 1 &&
        this.enemy3.line === this.hero.boomerang.line)
    ) {
      this.score += 100;
      this.enemy3.die();
    }
    if (
      (this.enemy4.pos === this.hero.boomerang.pos &&
        this.enemy4.line === this.hero.boomerang.line) ||
      (this.enemy4.pos === this.hero.boomerang.pos + 1 &&
        this.enemy4.line === this.hero.boomerang.line) ||
      (this.enemy4.pos === this.hero.boomerang.pos - 1 &&
        this.enemy4.line === this.hero.boomerang.line)
    ) {
      this.score += 100;
      this.enemy4.die();
    }
    if (
      (this.enemy5.pos === this.hero.boomerang.pos &&
        this.enemy5.line === this.hero.boomerang.line) ||
      (this.enemy5.pos === this.hero.boomerang.pos + 1 &&
        this.enemy5.line === this.hero.boomerang.line) ||
      (this.enemy5.pos === this.hero.boomerang.pos - 1 &&
        this.enemy5.line === this.hero.boomerang.line)
    ) {
      this.score += 100;
      this.enemy5.die();
    }
    if (this.enemy1.pos < 0) this.enemy1.die();
    if (this.enemy2.pos < 0) this.enemy2.die();
    if (this.enemy3.pos < 0) this.enemy3.die();
    if (this.enemy4.pos < 0) this.enemy4.die();
    if (this.enemy5.pos < 0) this.enemy5.die();

    if (
      (this.hero.pos === this.enemy1.pos &&
        this.hero.line === this.enemy1.line) ||
      (this.hero.pos === this.enemy2.pos &&
        this.hero.line === this.enemy2.line) ||
      (this.hero.pos === this.enemy3.pos &&
        this.hero.line === this.enemy3.line) ||
      (this.hero.pos === this.enemy4.pos &&
        this.hero.line === this.enemy4.line) ||
      (this.hero.pos === this.enemy5.pos && this.hero.line === this.enemy5.line)
    ) {
      if (!this.heroDied) {
        this.heroDied = true;
        await createData(gamerName, this.score);
        this.hero.die();
      }
    }
  }

  play(gamerName) {
    keyboardFunction(this.hero);
    const interval = setInterval(async () => {
      time += (time + 50) / 1000;
      this.check(gamerName);
      this.enemy1.moveLeft(this.hero);
      this.enemy2.moveLeft(this.hero);
      this.enemy3.moveLeft(this.hero);
      this.enemy4.moveLeft(this.hero);
      this.enemy5.moveLeft(this.hero);
      this.regenerateTrack();
      this.view.render(this.board, this.gamerName, this.les1, this.les2, time);
      console.log(`Очки: ${this.score}`);
      console.log(`Время игры: ${time.toFixed(1)}`);
      if (time >= 30) {
        clearInterval(interval);
        console.log(
          `${' '.repeat(30)}${'Победа!'}
          ${' '.repeat(17)}Твои очки: ${this.score}
          ${' '.repeat(13)}Сожжено калорий: ${this.score * 100}`
        );
        await createData(gamerName, this.score);
        process.exit();
      }
    }, 70);
    // this.check();

    // process.exit();
  }
}

module.exports = Game;
