import '../styles/main.scss';
import initBoards from './components/boards/boards';

console.error('working');

const init = () => {
  initBoards.initBoards();
  initBoards.boardBuilder();
};

init();
