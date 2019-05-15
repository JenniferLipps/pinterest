import pinsData from '../../helpers/data/pinsData';

const initPins = (boardId) => {
  pinsData.loadPinsForBoard(boardId)
    .then((pins) => {
      console.error('all pins', pins);
    })
    .catch(err => console.error('error with pins', err));
};

export default { initPins };
