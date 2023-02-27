// Враг.

class Enemy {
  constructor(skin, pos = 60, line = Math.floor(Math.random() * 5)) {
    this.skin = skin;
    this.pos = pos;
    this.line = line;
    this.generateSkin();
  }

  generateSkin() {
    const skins = [
      '🍩',
      '🍷',
      '🍕',
      '🍔',
      '🍬',
      '🍺',
      '🍫',
      '🥓',
      '🧁',
      '🍶',
      '🌭',
      '🍰',
    ];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    // Идём влево.
    this.pos -= 1;
  }

  die() {
    this.generateSkin();
    this.pos = Math.floor(Math.random() * (60 - 55) + 55);
    this.line = Math.floor(Math.random() * 5);
    console.log('Unhealthy food is dead!');
  }
}

module.exports = Enemy;
