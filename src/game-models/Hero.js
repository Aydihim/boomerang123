// Наш герой.

const Boomerang = require('./Boomerang');

class Hero {
  constructor(skin = '🤾🏼‍♀️', pos = 1, line = 1, boomerang = new Boomerang()) {
    //this.skin = ':женщина_играет_в_гандбол::оттенок-кожи-3:'; // ха-ха
    this.skin = skin; // ха-ха
    this.pos = pos;
    this.line = line;
    this.boomerang = boomerang;
  }

  moveLeft() {
    // Идём влево.
    this.pos -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.pos += 1;
  }

  moveUp() {
    if (this.line > 0) {
      this.line -= 1;
    }
  }

  moveDown() {
    if (this.line < 4) {
      this.line += 1;
    }
  }

  attack() {
    // Атакуем.
    this.boomerang.fly();
  }

  die() {
    this.skin = '🤰';
    this.pos -= 1;
    setTimeout(() => {
      console.log('YOU GAINED EXTRA KILOS!🤰');
      process.exit();
    }, 150);
  }
}

module.exports = Hero;
