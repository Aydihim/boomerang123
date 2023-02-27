// Сделаем отдельный класс для отображения игры в консоли.

const { EOL } = require('os');

class View {
  render(board, gamerName, les1, les2) {
    console.clear();
    console.log('\n');
    console.log(les1.join(''));
    console.log(board.map((el) => el.join('')).join(EOL));
    console.log(les2.join(''));
    console.log('\n');
    console.log(`Игрок: "${gamerName}"`);
  }
}

module.exports = View;
