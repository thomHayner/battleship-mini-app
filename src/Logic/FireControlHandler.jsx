// import checkWinner from './CheckWinner.jsx';

// function fireControlHandler(row, col, player)  {
//   // let tempState = data;
  

//   if (tempState.playerShot !== 'VICTORY!' && tempState.enemyShot !== 'VICTORY!') {
//     let newTurnNumber = tempState.turnNumber + 1;
//     let newShot;
//     let opposingShotDisplay = 'Ready to fire. Awaiting your orders, Sir!';
//     let nowSinking = "The Enemy's fleet is near.";
//     let newWin;
//     let roundBoard;
//     let carrier;
//     let battleship;
//     let cruiser;
//     let submarine;
//     let destroyer;
//     let score;
//     let opponentScore;
//     let opponentSinking;
//     let opponentWin;

//     if (tempState.isTheEnemyFiring === true ) {
//       roundBoard = tempState.enemyBoard.slice();
//       newShot = tempState.enemyShot;
//       newWin = tempState.enemyWin;
//       score = tempState.enemyScore;
//       opponentScore = tempState.playerScore;
//       opponentSinking = tempState.playerSinking;
//       opponentWin = tempState.playerWin;
//       carrier = tempState.enemyCarrierAfloat;
//       battleship = tempState.enemyBattleshipAfloat;
//       cruiser = tempState.enemyCruiserAfloat;
//       submarine = tempState.enemySubmarineAfloat;
//       destroyer = tempState.enemyDestroyerAfloat;
//     } else {
//       roundBoard = tempState.playerBoard.slice()
//       newShot = tempState.playerShot;
//       newWin = tempState.playerWin;
//       score = tempState.playerScore;
//       opponentScore = tempState.enemyScore;
//       opponentSinking = tempState.enemySinking;
//       opponentWin = tempState.enemyWin;
//       carrier = tempState.playerCarrierAfloat;
//       battleship = tempState.playerBattleshipAfloat;
//       cruiser = tempState.playerCruiserAfloat;
//       submarine = tempState.playerSubmarineAfloat;
//       destroyer = tempState.playerDestroyerAfloat;
//     }

//     if ((player === 'bluePlayer' && tempState.isTheEnemyFiring === true) || (player === 'redPlayer' && tempState.isTheEnemyFiring === false)) {

//       if (roundBoard[row][col] > 0) {
//         score += 5;
//         roundBoard[row][col] = -1;
//         newShot = 'Firing on ' + roundBoard[row][0] + col + '...Direct Hit!';
//       }
//       else if (roundBoard[row][col] === 0) {
//         score -= 1;
//         roundBoard[row][col] = -2;
//         newShot = 'Firing on ' + roundBoard[row][0] + col + '...Miss!';
//       }
//       else if (roundBoard[row][col] < 0) {
//         score -= 3;
//         newShot = 'You have already fired on this location. Try Again.';
//       }

// //  =========---------everything BELOW this line (until the next similar comment break point) is already inside it's own file---------=========
//       // let checkWinner = function(roundBoard) {
//       //   let tracker = [0,0,0,0,0];

//       //   for (let i = 1; i < 11; i++) {
//       //     for (let j = 1; j < 11; j++) {
//       //       switch ( roundBoard[i][j] ) {
//       //         case 1:
//       //           tracker[0]++
//       //           break;
//       //         case 2:
//       //           tracker[1]++
//       //           break;
//       //         case 3:
//       //           tracker[2]++
//       //           break;
//       //         case 4:
//       //           tracker[3]++
//       //           break;
//       //         case 5:
//       //           tracker[4]++
//       //           break;
//       //         default:
//       //           ;
//       //       }
//       //     }
//       //   }
//       //   return tracker;
//       // }
// //  ^^^^^^^^^---------everything ABOVE this line (until the next similar comment break point) is already inside it's pwn file---------^^^^^^^^^
//       let tracker = checkWinner(roundBoard);

//       if (tracker[0] === 0 && carrier === true) {
//         score += 3;
//         nowSinking = 'The enemy\'s Aircraft Carrier is sinking!';
//         carrier= false;
//       };
//       if (tracker[1] === 0 && battleship === true) {
//         score += 3;
//         nowSinking = 'The enemy\'s Battleship is sinking!';
//         battleship = false;
//       };
//       if (tracker[2] === 0 && cruiser === true) {
//         score += 3;
//         nowSinking = 'The enemy\'s Destroyer is sinking!';
//         cruiser = false;
//       };
//       if (tracker[3] === 0 && submarine === true) {
//         score += 3;
//         nowSinking = 'The enemy\'s Submarine is sinking!';
//         submarine = false;
//       };
//       if (tracker[4] === 0 && destroyer === true) {
//         score += 3;
//         nowSinking = 'The enemy\'s Patrol Boat is sinking!';
//         destroyer = false;
//       };
//       if (tracker.reduce(((a, b) => a+b), 0) === 0) {
//         if (score <= 0) {
//           score = 0;
//         }
//         score *= 100;
//         if (opponentScore <= 0) {
//           opponentScore = 0;
//         }
//         opponentScore *= 100;
//         newShot = 'VICTORY!';
//         newWin = 'You have sunk all of the enemy\'s ships!';
//         nowSinking = `SCORE: ${score}`;
//         opponentSinking = `SCORE: ${opponentScore}`;
//         opposingShotDisplay = 'DEFEAT!';
//         opponentWin = 'All of your ships have been sunk!';
//         // add fetch here to POST Scores
//       };
      
//       if (tempState.isTheEnemyFiring === true ) {
//         return this.setState({ 
//             enemyBoard: roundBoard, 
//             enemyShot: newShot, 
//             enemySinking: nowSinking, 
//             enemyWin: newWin,
//             enemyScore: score,
//             enemyCarrierAfloat: carrier,
//             enemyBattleshipAfloat: battleship,
//             enemyCruiserAfloat: cruiser,
//             enemySubmarineAfloat: submarine,
//             enemyDestroyerAfloat: destroyer,
//             playerShot: opposingShotDisplay,
//             playerSinking: opponentSinking,
//             playerWin: opponentWin,
//             turnNumber: newTurnNumber, 
//             isTheEnemyFiring: !tempState.isTheEnemyFiring, 
//         });
//       } else {
//         return this.setState({ 
//             playerBoard: roundBoard, 
//             playerShot: newShot, 
//             playerSinking: nowSinking, 
//             playerWin: newWin,
//             playerScore: score,
//             playerCarrierAfloat: carrier,
//             playerBattleshipAfloat: battleship,
//             playerCruiserAfloat: cruiser,
//             playerSubmarineAfloat: submarine,
//             playerDestroyerAfloat: destroyer,
//             enemyShot: opposingShotDisplay,
//             enemySinking: opponentSinking,
//             enemyWin: opponentWin,
//             turnNumber: newTurnNumber, 
//             isTheEnemyFiring: !tempState.isTheEnemyFiring, 
//         });
//       }

//       // this.setState({ 
//       //     turnNumber: newTurnNumber, 
//       //     isTheEnemyFiring: !tempState.isTheEnemyFiring, 
//       // });
//     }
//   }
// }

// export default fireControlHandler();
