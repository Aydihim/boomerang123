// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor(skin = '🥦', pos = -1, line = 0) {
    this.skin = skin;
    this.pos = pos;
    this.line = line;
    // this.boomLength = boomLength;
  }

  async moveRight(hero) {
    this.line = hero.line;
    this.pos = hero.pos + 1;
    for (let i = 0; i < 5; i += 1) {
      await new Promise((r) => setTimeout(r, 100));
      this.pos += 1;
    }

    this.line = hero.line;

    for (let i = this.pos; i > hero.pos; i -= 1) {
      await new Promise((r) => setTimeout(r, 100));

      this.pos -= 1;
    }
    this.pos = -8;
  }

  // fly(pos, line) {
  //   this.boomLength = 0;
  //   this.pos = pos;
  //   this.line = line;
  //   const interval = setInterval(() => {
  //     if (this.boomLength < 10) this.moveRight();
  //     if (this.boomLength >= 10) this.moveLeft();
  //     if (this.pos === pos) {
  //       this.pos = pos;
  //       this.boomLength = 0;
  //       clearInterval(interval);
  //     }
  //   }, 100);
  // }

  // moveLeft() {
  //   // Идём влево.
  //   this.pos -= 1;
  // }

  // moveRight() {
  //   // Идём вправо.
  //   this.pos += 1;
  //   this.boomLength += 1;
  // }
}

module.exports = Boomerang;
