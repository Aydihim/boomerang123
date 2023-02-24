// Наш герой.
const clc = require('cli-color');
const Boomerang = require("./Boomerang");

class Hero {
  constructor({ position }) {
    this.skin = ':женщина_играет_в_гандбол::оттенок-кожи-3:'; // можете использовать любые emoji
    this.posH = posH ?? 1;
    this.posV = 1;
    this.boomerang = new Boomerang();
  }

  moveLeft() {
    // Идём влево.
    this.posH -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.posH += 1;
  }

  moveUp() {
    if (this.posV > 0) {
      this.posV -= 1;
    }
  }

  moveDown() {
    if (this.posV < 4) {
      this.posV += 1;
    }
  }

  attack() {
    // Атакуем.
    this.boomerang.fly();
  }

  die() {
    this.skin = '🤰';
    console.log(clc.red('YOU GAINED EXTRA KILOS!🤰'));
    process.exit();
  }
}

module.exports = Hero;
