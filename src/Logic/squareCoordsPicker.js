//0 Declare your square coordinates picker.
export default function squareCoordsPicker() {
  //1 The board is an 11 x 11 grid, with an index-row on top and an index-column on the left side.
  //1 That makes 121 squares in total (zero indexed and numbered [0-120]). [0-10] are the 
  //1 index-row, and any number that is divisible by 11 is in the index-column.  The index-row is
  //1 already excluded from the range of possible return values so we don't have to worry about it.
  let square = Math.floor(Math.random() * (121 - 11) + 11);
  if (square % 11 === 0) {
    //2 top-index-squares were already excluded, but we still need to check and make sure it is not 
    //2 one of the left-index-squares, and if it is, we need to advance to the next square.
    square++
  }
  //1 Then we return a set of [x,y] coordinates as an array.
  return [square % 11, (square - (square % 11))/11]
}
