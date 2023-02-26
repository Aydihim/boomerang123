// Сделаем отдельный класс для отображения игры в консоли.

const { EOL } = require('os');

class View {
  render(board) {
    const yourTeamName = 'DADI';
    // Тут всё рисуем.
    console.clear();
    console.log('\n');
    // console.log(track1.join(''));
    // console.log(track.join(''));
    // console.log(track2.join(''));
    console.log(board.map((el) => el.join('')).join(EOL));
    console.log('\n');
    console.log(`Produced by: "${yourTeamName}"`);
  }
}

module.exports = View;
