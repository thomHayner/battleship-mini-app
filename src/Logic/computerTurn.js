import squareCoordsPicker from "./squareCoordsPicker";

export default function computerTurn(row, col, callback) {
  return new Promise((resolve, reject) => {
    let square = squareCoordsPicker();
    callback(row, col);
    if (true) {
      setTimeout(() => resolve(square), 2000);
    } else {
      reject("ERROR");
    };
  });
};
