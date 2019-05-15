import boardData from '../../helpers/data/boardsData';
import util from '../../helpers/util';

let boards = [];

const boardBuilder = (boardsArray) => {
  let domString = '';
  boardsArray.forEach((board) => {
    domString += '<div class="card col-3 d-flex">';
    domString += `<div>${board.name}</div>`;
    domString += '</div>';
  });
  util.printToDom('user-boards', domString);
};

const initBoards = () => {
  boardData.loadBoards()
    .then((resp) => {
      const boardsInfo = resp.data.boards;
      boards = boardsInfo;
      boardBuilder(boards);
    })
    .catch(err => console.error('error from loadBoards', err));
};

export default { initBoards, boardBuilder };
