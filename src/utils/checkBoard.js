let checkBoard = function(roundBoard) {
  let tracker = [0,0,0,0,0];

  for (let i = 1; i < 11; i++) {
    for (let j = 1; j < 11; j++) {
      switch ( roundBoard[i][j] ) {
        case 1:
          tracker[0]++
          break;
        case 2:
          tracker[1]++
          break;
        case 3:
          tracker[2]++
          break;
        case 4:
          tracker[3]++
          break;
        case 5:
          tracker[4]++
          break;
        default:
          ;
      }
    }
  }
  return tracker;
}

export default checkBoard;
