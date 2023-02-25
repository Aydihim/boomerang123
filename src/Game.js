// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
// const Boomerang = require('./game-models/Boomerang');
const View = require('./View');
const Boomerang = require('./game-models/Boomerang');

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.hero = new Hero(); // Герою можно аргументом передать бумеранг.
    this.enemy1 = new Enemy();
    this.enemy2 = new Enemy();
    this.enemy3 = new Enemy();
    this.enemy4 = new Enemy();
    this.enemy5 = new Enemy();
    this.view = new View();
    this.boomerang = new Boomerang();
    this.track1 = [];
    this.track2 = [];
    this.track3 = [];
    this.track4 = [];
    this.track5 = [];
    this.board = [];
    this.score = 0;
    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track1 = new Array(this.trackLength).fill(' ');
    this.track2 = new Array(this.trackLength).fill(' ');
    this.track3 = new Array(this.trackLength).fill(' ');
    this.track4 = new Array(this.trackLength).fill(' ');
    this.track5 = new Array(this.trackLength).fill(' ');
    this.board = [
      this.track1,
      this.track2,
      this.track3,
      this.track4,
      this.track5,
    ];
    this.board[this.hero.posH][this.hero.posV] = this.hero.skin;
    this.board[this.enemy1.posH][this.enemy1.posV] = this.enemy1.skin;
    this.board[this.enemy2.posH][this.enemy2.posV] = this.enemy2.skin;
    this.board[this.enemy3.posH][this.enemy3.posV] = this.enemy3.skin;
    this.board[this.enemy4.posH][this.enemy4.posV] = this.enemy4.skin;
    this.board[this.enemy5.posH][this.enemy5.posV] = this.enemy5.skin;
    this.board[this.boomerang.posH][this.boomerang.posV] = this.boomerang.skin;
  }

  check() {
    if (
      (this.hero.posH === this.enemy1.posH &&
        this.hero.posV === this.enemy1.posV) ||
      (this.hero.posH === this.enemy2.posH &&
        this.hero.posV === this.enemy2.posV) ||
      (this.hero.posH === this.enemy3.posH &&
        this.hero.posV === this.enemy3.posV) ||
      (this.hero.posH === this.enemy4.posH &&
        this.hero.posV === this.enemy4.posV) ||
      (this.hero.posH === this.enemy5.posH &&
        this.hero.posV === this.enemy5.posV)
    ) {
      this.hero.die();
      const createData = async () => {
        await Gamer.create({
          name: this.name,
          scores: this.score,
        });
      };
      createData();
      if (
        (this.enemy1.posH === this.boomerang.posH &&
          this.enemy1.posV === this.boomerang.posV) ||
        (this.enemy1.posH === this.boomerang.posH + 1 &&
          this.enemy1.posV === this.boomerang.posV)
      ) {
        this.score += 100;
        this.enemy1.die();
      }
      if (
        (this.enemy2.posH === this.boomerang.posH &&
          this.enemy2.posV === this.boomerang.posV) ||
        (this.enemy2.posH === this.boomerang.posH + 1 &&
          this.enemy2.posV === this.boomerang.posV)
      ) {
        this.score += 100;
        this.enemy2.die();
      }
      if (
        (this.enemy3.posH === this.boomerang.posH &&
          this.enemy3.posV === this.boomerang.posV) ||
        (this.enemy3.posH === this.boomerang.posH + 1 &&
          this.enemy3.posV === this.boomerang.posV)
      ) {
        this.score += 100;
        this.enemy3.die();
      }
      if (
        (this.enemy4.posH === this.boomerang.posH &&
          this.enemy4.posV === this.boomerang.posV) ||
        (this.enemy4.posH === this.boomerang.posH + 1 &&
          this.enemy4.posV === this.boomerang.posV)
      ) {
        this.score += 100;
        this.enemy4.die();
      }
      if (
        (this.enemy5.posH === this.boomerang.posH &&
          this.enemy5.posV === this.boomerang.posV) ||
        (this.enemy5.posH === this.boomerang.posH + 1 &&
          this.enemy5.posV === this.boomerang.posV)
      ) {
        this.score += 100;
        this.enemy5.die();
      }
      if (this.enemy1.position === 0) this.enemy1.die();
      if (this.enemy2.position === 0) this.enemy2.die();
      if (this.enemy3.position === 0) this.enemy3.die();
      if (this.enemy4.position === 0) this.enemy4.die();
      if (this.enemy5.position === 0) this.enemy5.die();
    }
  }

  play() {
    setInterval(() => {
      this.check();
      this.enemy.moveLeft();
      this.enemy1.moveLeft();
      this.enemy2.moveLeft();
      this.enemy3.moveLeft();
      this.enemy4.moveLeft();
      this.regenerateTrack();
      this.view.render(this.board);
    }, 70);
  }
}

module.exports = Game;
