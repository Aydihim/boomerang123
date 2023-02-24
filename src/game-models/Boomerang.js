// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor(skin = '🥦', posH = -1, posV = 1, boomLength = 0) {
    this.skin = skin;
    this.posH = posH;
    this.posV = posV;
    this.boomLength = boomLength;
  }

  fly(posH, posV) {
    this.boomLength = 0;
    this.posH = posH;
    this.posV = posV;
    const interval = setInterval(() => {
      if (this.boomLength < 10) this.moveRight();
      if (this.boomLength >= 10) this.moveLeft();
      if (this.posH === posH) {
        this.posH = posH;
        this.boomLength = 0;
        clearInterval(interval);
      }
    }, 100);
    this.moveRight();
    this.moveLeft();
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
    this.boomLength += 1;
  }
}

module.exports = Boomerang;
