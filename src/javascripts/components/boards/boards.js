import boardData from '../../helpers/data/boardsData';
import util from '../../helpers/util';

const seePinDiv = (e) => {
  const boardId = e.target.closest('.card').id;
  console.error('button clicked', boardId);
  document.getElementById('boards-page').classList.add('hide');
  document.getElementById('pins-page').classList.remove('hide');
};

const bindEvents = () => {
  const allButtons = document.getElementsByClassName('see-pins');
  for (let i = 0; i < allButtons.length; i += 1) {
    allButtons[i].addEventListener('click', seePinDiv);
  }
};

const boardBuilder = (boardsArray) => {
  let domString = '';
  boardsArray.forEach((board) => {
    domString += '<div class="card col-3 d-flex">';
    domString += `<div id='${board.id}'></div>`;
    domString += `<div>${board.name}</div>`;
    domString += '<button class="btn btn-danger see-pins">Pins</button>';
    domString += '</div>';
  });
  util.printToDom('user-boards', domString);
  bindEvents();
};

const initBoards = () => {
  boardData.loadBoards()
    .then((resp) => {
      const boardsInfo = resp.data.boards;
      boardBuilder(boardsInfo);
    })
    .catch(err => console.error('error from loadBoards', err));
};

export default { initBoards };
