// Враг.

class Enemy {
  constructor() {
    this.generateSkin();
    this.position = Math.floor(Math.random() * (60 - 55) + 55);
    this.trackVert = Math.floor(Math.random() * 5);
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
    this.position -= 1;
  }

  die() {
    this.generateSkin();
    this.position = Math.floor(Math.random() * (60 - 55) + 55);
    this.trackVert = Math.floor(Math.random() * 5);
    console.log('Unhealthy food is dead!');
  }
}

module.exports = Enemy;
