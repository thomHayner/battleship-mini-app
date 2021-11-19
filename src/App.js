import React from 'react';
import checkWinner from './Logic/checkWinner';
import WhoseTurnIsItAnyway from './Components/DisplayMessages/WhoseTurnIsItAnyway';
import PlayerDashboard from './Components/PlayerDashboard';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redPlayer: {
        name: "redPlayer",
        board: [
          ["","1","2","3","4","5","6","7","8","9","10",],
          ["A",2,0,0,0,0,0,0,0,0,4],
          ["B",2,0,0,0,0,0,0,0,0,4],
          ["C",2,0,0,0,0,0,0,0,0,4],
          ["D",2,0,0,0,0,0,0,0,0,0],
          ["E",0,0,0,0,0,0,0,0,0,0],
          ["F",0,0,0,0,0,0,0,0,0,0],
          ["G",3,3,3,0,0,0,0,0,0,0],
          ["H",0,0,0,0,0,0,0,0,0,0],
          ["I",0,0,0,0,0,0,0,0,0,0],
          ["J",1,1,1,1,1,0,0,0,5,5],
        ],
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
        name: "bluePlayer",
        board: [
          ["","1","2","3","4","5","6","7","8","9","10",],
          ["A",0,2,0,0,0,0,0,0,4,0],
          ["B",0,2,0,0,0,0,0,0,4,0],
          ["C",0,2,0,0,0,0,0,0,4,0],
          ["D",0,2,0,0,0,0,0,0,0,0],
          ["E",0,0,0,0,0,0,0,0,0,0],
          ["F",3,3,3,0,0,0,0,0,0,0],
          ["G",0,0,0,0,0,0,0,0,0,0],
          ["H",0,0,0,0,0,0,0,0,0,0],
          ["I",1,1,1,1,1,0,0,0,5,5],
          ["J",0,0,0,0,0,0,0,0,0,0],
        ],
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
      isBluePlayerFiring: false,
    }
    this.fireControlHandler = this.fireControlHandler.bind(this);
  }

  fireControlHandler = (row, col, player) => {
    if (this.state.redPlayer.shot !== 'VICTORY!' && this.state.bluePlayer.shot !== 'VICTORY!') {
      let roundBoard = this.state.ships.redPlayer.board.slice();
      let turnPlayerShips = this.state.ships.redPlayer;
      let turnPlayerMessages = this.state.redPlayer;
      let opponentMessages = this.state.bluePlayer;
      if (this.state.isBluePlayerFiring) {
        roundBoard = this.state.bluePlayerboard.slice();
        turnPlayerShips = this.state.ships.bluePlayer;
        turnPlayerMessages = this.state.messages.bluePlayer;
        opponentMessages = this.state.messages.redPlayer;
      }
      let newTurnNumber = this.state.turnNumber + 1;
      let opposingShotDisplay = 'Ready to fire. Awaiting your orders, Sir!';
      let playerSinking = 'The Enemy\'s fleet is near.';
      let playerShot = turnPlayerMessages.shot;
      let playerWin = turnPlayerMessages.win;
      let playerScore = turnPlayerMessages.score;
      let carrier = turnPlayerShips.carrierAfloat;
      let battleship = turnPlayerShips.battleshipAfloat;
      let cruiser = turnPlayerShips.cruiserAfloat;
      let submarine = turnPlayerShips.submarineAfloat;
      let destroyer = turnPlayerShips.destroyerAfloat;
      let opponentScore = opponentMessages.score;
      let opponentSinking = opponentMessages.sinking;
      let opponentWin = opponentMessages.win;

      if ((player === 'bluePlayer' && this.state.isBluePlayerFiring === true) || (player === 'redPlayer' && this.state.isBluePlayerFiring === false)) {

        if (roundBoard[row][col] > 0) {
          playerScore += 5;
          roundBoard[row][col] = -1;
          playerShot = 'Firing on ' + roundBoard[row][0] + col + '...Direct Hit!';
        }
        else if (roundBoard[row][col] === 0) {
          playerScore -= 1;
          roundBoard[row][col] = -2;
          playerShot = 'Firing on ' + roundBoard[row][0] + col + '...Miss!';
        }
        else if (roundBoard[row][col] < 0) {
          playerScore -= 3;
          playerShot = 'You have already fired on this location. Try Again.';
        };

        // This returns a check of the board to see if there is now a winner
        let tracker = checkWinner(roundBoard);

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
        if (tracker.reduce(((a, b) => a+b), 0) === 0) {
          if (playerScore <= 0) {
            playerScore = 0;
          }
          playerScore *= 100;
          if (opponentScore <= 0) {
            opponentScore = 0;
          }
          opponentScore *= 100;
          playerShot = 'VICTORY!';
          playerWin = 'You have sunk all of the enemy\'s ships!';
          playerSinking = `SCORE: ${playerScore}`;
          opponentSinking = `SCORE: ${opponentScore}`;
          opposingShotDisplay = 'DEFEAT!';
          opponentWin = 'All of your ships have been sunk!';
          // add fetch here to POST Scores
        };
        
        // This part finishes up by setting the new state values
        if (this.state.isBluePlayerFiring === true ) {
          this.setState({ 
            bluePlayer: {
              ...this.state.bluePlayer,
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
            redPlayer: {
              ...this.state.redPlayer,
              messages: {
                shot: opposingShotDisplay,
                sinking: opponentSinking,
                win: opponentWin,
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
              }
            },
            bluePlayer: {
              ...this.state.bluePlayer,
              messages: {
                shot: opposingShotDisplay,
                sinking: opponentSinking,
                win: opponentWin,
              }
            }
          });
        }

        this.setState({ 
          turnNumber: newTurnNumber, 
          isBluePlayerFiring: !this.state.isBluePlayerFiring, 
        });
      }
    }
  }

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
              <WhoseTurnIsItAnyway turn={this.state.isBluePlayerFiring} />
            </div>
            <div className="col-equivalent player-area-parent" >
              <PlayerDashboard className="player-area" player={this.state.redPlayer} opponentShips={this.state.bluePlayer.ships} handleFire={ this.fireControlHandler } />
              <PlayerDashboard className="player-area" player={this.state.bluePlayer} opponentShips={this.state.redPlayer.ships} handleFire={ this.fireControlHandler } />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;