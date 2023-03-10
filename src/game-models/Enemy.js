// ΠΡΠ°Π³.

class Enemy {
  constructor(skin, pos = 60, line = Math.floor(Math.random() * 5)) {
    this.skin = skin;
    this.pos = pos;
    this.line = line;
    this.generateSkin();
  }

  generateSkin() {
    const skins = [
      'π©',
      'π·',
      'π',
      'π',
      'π¬',
      'πΊ',
      'π«',
      'π₯',
      'π§',
      'πΆ',
      'π­',
      'π°',
    ];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    // ΠΠ΄ΡΠΌ Π²Π»Π΅Π²ΠΎ.
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
