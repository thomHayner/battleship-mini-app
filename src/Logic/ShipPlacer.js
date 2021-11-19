// This currently only does horizontal ships, need to implement logic for vertical placement

// declare your picker functions
let orientationPicker = () => Math.random() < 0.5;

let squarePicker = () => Math.floor(Math.random() * (121 - 11) + 11);

function tryToPlaceAPiece(piece, placementBoard) { 
  let square = squarePicker();
  //1 top-index-squares are already excluded, but you still need to check and make sure it is not 
  //1 one of the left-index-squares, if it is, advance to the next square
  if (square % 11 === 0) {
    square++
  }
  let row = (square - (square % 11))/11
  let col = square % 11

  //1 if orientation is true, ( orientation === 1 ), check the row
  if (orientationPicker()) {
    //2 if the piece fits before hitting the edge of the board
    if (col + piece.length <= 11) {
      //3 see if there are any collisions along the path
      if (placementBoard[row].slice(col, col + piece.length).reduce((a,b) => a+b ) === 0) {
        //4 if no collisions, place the piece
        for (let i = col; i < col + piece.length; i++) {
          placementBoard[row][i] = piece[0]
        }
        //4 and mark the piece as placed
        return placementBoard
      }
    //2 else, check for collisions in the other direction on the same row
    } else {
      //3 see if there are any collisions along the path
      if (placementBoard[row].slice(col + 1 - piece.length, col + 1).reduce((a,b) => a+b ) === 0) {
        //4 if no collisions, place the piece
        for (let i = col + 1 - piece.length; i < col + 1; i++) {
          placementBoard[row][i] = piece[0]
        }
        //4 and mark the piece as placed
        return placementBoard
      }
    }
  //1 else, if orientation is false, ( orientation === 0 ), check the col
  } else {
    //2 if the piece fits before hitting the edge of the board
    if (col + piece.length <= 11) {
      //3 see if there are any collisions along the path
      if (placementBoard[row].slice(col, col + piece.length).reduce((a,b) => a+b ) === 0) {
        //4 if no collisions, place the piece
        for (let i = col; i < col + piece.length; i++) {
          placementBoard[row][i] = piece[0]
        }
        //4 and mark the piece as placed
        return placementBoard
      }
    //2 else, check for collisions in the other direction on the same row
    } else {
      //3 see if there are any collisions along the path
      if (placementBoard[row].slice(col + 1 - piece.length, col + 1).reduce((a,b) => a+b ) === 0) {
        //4 if no collisions, place the piece
        for (let i = col + 1 - piece.length; i < col + 1; i++) {
          placementBoard[row][i] = piece[0]
        }
        //4 and mark the piece as placed
        return placementBoard
      }
    }
  }
  //1 if the piece was not placed, recurse with new square
  return tryToPlaceAPiece(piece, placementBoard);
};

export default function shipPlacer() {
  //0 start with:
  //0 an empty board,
  let placementBoard = [
    ["","1","2","3","4","5","6","7","8","9","10",],
    ["A",0,0,0,0,0,0,0,0,0,0],
    ["B",0,0,0,0,0,0,0,0,0,0],
    ["C",0,0,0,0,0,0,0,0,0,0],
    ["D",0,0,0,0,0,0,0,0,0,0],
    ["E",0,0,0,0,0,0,0,0,0,0],
    ["F",0,0,0,0,0,0,0,0,0,0],
    ["G",0,0,0,0,0,0,0,0,0,0],
    ["H",0,0,0,0,0,0,0,0,0,0],
    ["I",0,0,0,0,0,0,0,0,0,0],
    ["J",0,0,0,0,0,0,0,0,0,0],
  ];
  //0 and an array of 5 ship pieces.
  let shipPieces = [
    [1,1,1,1,1],
    [2,2,2,2],
    [3,3,3],
    [4,4,4],
    [5,5]
  ];

  //0 Now you have 5 pieces, a board, and a way to pick an orientation and a placement square.
  for (let i = 0; i < shipPieces.length; i++) {
    //1 Loop through the shipPieces array and place each of the pieces.
    placementBoard = tryToPlaceAPiece(shipPieces[i], placementBoard);
  }

  //0 return a new board wih all of the pieces placed
  return placementBoard
}
