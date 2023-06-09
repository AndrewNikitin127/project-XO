import ticTacToe from './games/ticTacToe.js';
import ticTacToePvP from './games/ticTacToePvP.js';
import greeting from './greeting.js';

export default () => {
  const gameConf = greeting();
  if (gameConf.mode === 'B') {
    ticTacToePvP(gameConf);
  } else {
    ticTacToe(gameConf);
  }

  console.log('точка входа , тут запускаются модули после старта');
  ticTacToe(gameConf);
};

/* тут будут основное меню после запуска игры, так же
   если наша игра будет подтягиваться как пакет в другом проекте
   то стартовать будет от сюда. этот файл является точкой входа программы, */
