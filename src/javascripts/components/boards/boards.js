import boardData from '../../helpers/data/boardsData';

const initBoards = () => {
  boardData.loadBoards()
    .then((resp) => {
      console.error('resp', resp);
    })
    .catch(err => console.error('error from loadBoards', err));
};

export default { initBoards };
