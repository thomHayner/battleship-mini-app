import React from 'react';
import shipPlacer from './Logic/shipPlacer';
import checkBoard from './Logic/checkBoard';
import computerTurn from './Logic/computerTurn';
import WhoseTurnIsItAnyway from './Components/Elements/DisplayMessages/WhoseTurnIsItAnyway';
import PlayerDashboard from './Components/PlayerDashboard';
import './App.css';
import squareCoordsPicker from './Logic/squareCoordsPicker';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redPlayer: {
        id: 1,
        name: "Player",
        board: shipPlacer(),
        // [
        //   ["","1","2","3","4","5","6","7","8","9","10",],
        //   ["A",2,0,0,0,0,0,0,4,4,4],
        //   ["B",2,0,0,0,0,0,0,0,0,3],
        //   ["C",2,0,0,0,0,0,0,0,0,3],
        //   ["D",2,0,0,0,0,0,0,0,0,3],
        //   ["E",0,0,0,0,0,0,0,0,0,0],
        //   ["F",0,0,0,0,0,0,0,0,0,0],
        //   ["G",0,0,0,0,0,0,0,0,0,0],
        //   ["H",0,0,0,0,0,0,0,0,0,0],
        //   ["I",0,0,0,0,0,0,0,0,0,5],
        //   ["J",1,1,1,1,1,0,0,0,0,5],
        // ],
        messages: {
          score: 0,
          shot: "Ready to fire. Awaiting your orders, Sir!",
          sinking: "The Enemy's fleet is near.",
          win: 'There are still more ships to sink.',
        },
        ships: {
          carrierAfloat: true,
          battleshipAfloat: true,
          cruiserAfloat: true,
          submarineAfloat: true,
          destroyerAfloat: true,
        },
      },
      bluePlayer: {
        id: 2,
        name: "Computer",
        board: shipPlacer(),
        messages: {
          score: 0,
          shot: "The Enemy is targeting us, Sir!",
          sinking: "The Enemy's fleet is near.",
          win: "There are still more ships to sink.",
        },
        ships: {
          carrierAfloat: true,
          battleshipAfloat: true,
          cruiserAfloat: true,
          submarineAfloat: true,
          destroyerAfloat: true,
        },
      },
      highScores: [],
      turnNumber: 0,
      isComputerFiring: false,
      gameOver: false
    };
    this.fireControlHandler = this.fireControlHandler.bind(this);
    this.subController = this.subController.bind(this);
  };

  fireControlHandler = (row, col, playerId) => {
    if (this.state.gameOver === false && this.state.isComputerFiring === false && playerId === 1) {
      computerTurn(row, col, this.subController)
        .then(res => this.subController(res[1], res[0]))
        .catch(err => {
          this.setState({
            bluePlayer: {
              ...this.state.bluePlayer,
              messages: {
                shot: err,
                sinking: "If game is not functioning,",
                win: "reload page and start over.",
              }
            }
          })
        });
    };
  };

  subController = (row, col) => {
    if (this.state.gameOver === false) {
      let newTurnNumber = this.state.turnNumber + 1;
      let roundBoard = this.state.redPlayer.board.slice();
      let turnPlayerShips = this.state.redPlayer.ships;
      let turnPlayerMessages = this.state.redPlayer.messages;
      let opponentMessages = this.state.bluePlayer.messages;
      if (this.state.isComputerFiring) {
        roundBoard = this.state.bluePlayer.board.slice();
        turnPlayerShips = this.state.bluePlayer.ships;
        turnPlayerMessages = this.state.bluePlayer.messages;
        opponentMessages = this.state.redPlayer.messages;
      };
      let playerScore = turnPlayerMessages.score;
      let playerShot = turnPlayerMessages.shot;
      let playerSinking = "The Enemy's fleet is near.";
      let playerWin = turnPlayerMessages.win;
      let carrier = turnPlayerShips.carrierAfloat;
      let battleship = turnPlayerShips.battleshipAfloat;
      let cruiser = turnPlayerShips.cruiserAfloat;
      let submarine = turnPlayerShips.submarineAfloat;
      let destroyer = turnPlayerShips.destroyerAfloat;
      let opponentScore = opponentMessages.score;
      let opposingShotDisplay = this.state.isComputerFiring ? "Ready to fire. Awaiting your orders, Sir!" : "Acquiring target.";
      let opponentSinking = opponentMessages.sinking;
      let opponentWin = opponentMessages.win;

      //  This part determines what type of a square you hit (each square has a value, with different
      //  values representing each ship, empty squares, or previous hits and misses).

      // If the square's value is greater than 0, that means that the square containes a ship piece.
      if (roundBoard[row][col] > 0) {
        playerScore += 5;
        roundBoard[row][col] = -1;
        playerShot = "Firing on " + roundBoard[row][0] + col + "...Direct Hit!";
      }
      // If the square's value is equal to 0, that means that the square is empty.
      else if (roundBoard[row][col] === 0) {
        playerScore -= 1;
        roundBoard[row][col] = -2;
        playerShot = "Firing on " + roundBoard[row][0] + col + "...Miss!";
      }
      // If the square's value is less than 0, that means that the square has already been fired upon.
      else if (roundBoard[row][col] < 0) {
        // This makes the computer smarter by preventing it from firing repeatedly at the same square.
        if (this.state.isComputerFiring && Math.random() < 0.95) {
          let square = squareCoordsPicker() 
          this.subController(square[1], square[0])
          return;
        }
        playerScore -= 3;
        playerShot = "You have already fired on this location. Try Again.";
      };

      // This returns a check of the board to see if a ship was just sunk, and to keep track of 
      // previously sunken ships.  tracker is an array of 5 integers, one integer for each ship.
      // The total value of a ship is it's size * it's value, i.e. battleship = 4 squares * 2 value.
      // When a ship square is hit, it's square value changes to -1, and that square is no longer
      // tracked.  So, a battleship with on 'hit' is an array ((3 squares * 2 value) + (1 square with
      // a -1 value)).  When the tracker function runs it count's all of the squares with a 2 value on
      // the board and it store that sum in the 1 index of the tracker return array, that is the check
      // for a battleship, if the 1 index of the tracker return array is 0, that means that there are 
      // no more 2 value squares on the board, thus there is no battleshipand it can be marked as sunk.
      let tracker = checkBoard(roundBoard);
      if (tracker[0] === 0 && carrier === true) {
        playerScore += 3;
        playerSinking = "The enemy's Aircraft Carrier is sinking!";
        carrier= false;
      };
      if (tracker[1] === 0 && battleship === true) {
        playerScore += 3;
        playerSinking = "The enemy's Battleship is sinking!";
        battleship = false;
      };
      if (tracker[2] === 0 && cruiser === true) {
        playerScore += 3;
        playerSinking = "The enemy's Cruiser is sinking!";
        cruiser = false;
      };
      if (tracker[3] === 0 && submarine === true) {
        playerScore += 3;
        playerSinking = "The enemy's Submarine is sinking!";
        submarine = false;
      };
      if (tracker[4] === 0 && destroyer === true) {
        playerScore += 3;
        playerSinking = "The enemy's Destroyer is sinking!";
        destroyer = false;
      };

      // This part checks if there is winner.
      if (tracker.reduce(((a, b) => a+b), 0) === 0) {
        // No negative scores allowed.
        if (playerScore <= 0) {
          playerScore = 0;
        };
        // 100x multiplier to make scores look bigger/higher and more appealing.
        playerScore *= 100;
        if (opponentScore <= 0) {
          opponentScore = 0;
        };
        opponentScore *= 100;
        playerShot = "VICTORY!";
        playerWin = "You have sunk all of the enemy's ships!";
        playerSinking = `SCORE: ${playerScore}`;
        opponentSinking = `SCORE: ${opponentScore}`;
        opposingShotDisplay = "DEFEAT!";
        opponentWin = "All of your ships have been sunk!";
        // Putting setState here shuts the game down immediately after a win, preventing the computer
        // player from automatically taking their turn, it also limits the gameOver property to a
        // specific scope, declared once at the start of the game and updated only once at the end.
        this.setState({ gameOver: true });
      };
      
      // This part finishes up by setting the new state values.
      if (this.state.isComputerFiring === true ) {
        this.setState({
          bluePlayer: {
            // When updating some nested props but not all nested props, you need to use spread operator.
            ...this.state.bluePlayer,
            board: roundBoard,
            messages: {
              shot: playerShot,
              sinking: playerSinking,
              win: playerWin,
              score: playerScore,
            },
            ships: {
              // Here, all nested props are being updated, so the spread operator is not necessary.
              carrierAfloat: carrier,
              battleshipAfloat: battleship,
              cruiserAfloat: cruiser,
              submarineAfloat: submarine,
              destroyerAfloat: destroyer,
            },
          },
          redPlayer: {
            ...this.state.redPlayer,
            messages: {
              shot: opposingShotDisplay,
              sinking: opponentSinking,
              win: opponentWin,
              score: opponentScore,
            },
          },
        });
      } else {
        this.setState({
          redPlayer: {
            ...this.state.redPlayer,
            board: roundBoard,
            messages: {
              shot: playerShot,
              sinking: playerSinking,
              win: playerWin,
              score: playerScore,
            },
            ships: {
              carrierAfloat: carrier,
              battleshipAfloat: battleship,
              cruiserAfloat: cruiser,
              submarineAfloat: submarine,
              destroyerAfloat: destroyer,
            },
          },
          bluePlayer: {
            ...this.state.bluePlayer,
            messages: {
              shot: opposingShotDisplay,
              sinking: opponentSinking,
              win: opponentWin,
              score: opponentScore,
            },
          },
        });
      };

      this.setState({
        turnNumber: newTurnNumber,
        isComputerFiring: !this.state.isComputerFiring,
      });
      
      // This 'return true' is here to make sure that the Promise correctly fires and that
      // error handling is done correctly.
      return true
    };
  };

  render() {
    return (
      <div className="App" >
        <header className="container-equivalent App-header" >
          <h1 className="row-equivalent" >Battleship</h1>
          <h2 className="row-equivalent" >Based on the Classic Board Game</h2>
        </header>
        <div className="container-equivalent App-main" >
          <div className="row-equivalent" >
            <div className="col-equivalent whose-turn-banner" >
              <WhoseTurnIsItAnyway turn={this.state.isComputerFiring} gameOver={this.state.gameOver} />
            </div>
            <div className="col-equivalent player-area-parent" >
              <PlayerDashboard className="player-area" playerData={this.state.redPlayer} opponentShips={this.state.bluePlayer.ships} handleFire={ this.fireControlHandler } />
              <PlayerDashboard className="player-area" playerData={this.state.bluePlayer} opponentShips={this.state.redPlayer.ships} handleFire={ this.fireControlHandler } />
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default App;
