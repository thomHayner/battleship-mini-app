import React from 'react';
import checkWinner from './Logic/CheckWinner';
import WhoseTurnIsItAnyway from './Components/DisplayMessages/WhoseTurnIsItAnyway';
import PlayerDashboard from './Components/PlayerDashboard';
import './App.css';
// import ChooseGame from './Pages/ChooseGameLandingPage';
// import fireControlHandler from './Logic/FireControlHandler';

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
          shot: "Ready to fire. Awaiting your orders, Sir!",
          sinking: "The Enemy's fleet is near.",
          win: 'There are still more ships to sink.',
        },
        score: 0,
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
          shot: "The Enemy is targeting us, Sir!",
          sinking: "The Enemy's fleet is near.",
          win: "There are still more ships to sink.",
        },
        score: 0,
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

  // add componentDidMount here to invoke fetch
  //    add fetch here to get scores

  // componentDidMount() {
  //   fetch('http://localhost:8080')
  //     .then(res => {
  //       return ;
  //     })
  //     .then(data => {
  //       this.setState({ highScores: data }) ;
  //     })
  // }

  fireControlHandler = (row, col, player) => {
    if (this.state.redPlayer.shot !== 'VICTORY!' && this.state.bluePlayer.shot !== 'VICTORY!') {
      let turnPlayer = this.state.redPlayer;
      let opponent = this.state.bluePlayer;
      // if (this.state.isBluePlayerFiring) {
        // turnPlayer = this.state.bluePlayer;
        // opponent = this.state.redPlayer;
      // }
      let newTurnNumber = this.state.turnNumber + 1;
      let opposingShotDisplay = 'Ready to fire. Awaiting your orders, Sir!';
      let nowSinking = 'The Enemy\'s fleet is near.';
      let roundBoard = this.state.isBluePlayerFiring ? this.state.bluePlayer.board.slice() : this.state.redPlayer.board.slice();
      let newShot = this.state.isBluePlayerFiring ? this.state.bluePlayer.messages.shot : this.state.redPlayer.messages.shot;
      let newWin = this.state.isBluePlayerFiring ? this.state.bluePlayer.messages.win : this.state.redPlayer.messages.win;
      let score = this.state.isBluePlayerFiring ? this.state.bluePlayer.score : this.state.redPlayer.score;
      let carrier = this.state.isBluePlayerFiring ? this.state.bluePlayer.ships.carrierAfloat : this.state.redPlayer.ships.carrierAfloat;
      let battleship = this.state.isBluePlayerFiring ? this.state.bluePlayer.ships.battleshipAfloat : this.state.redPlayer.ships.battleshipAfloat;
      let cruiser = this.state.isBluePlayerFiring ? this.state.bluePlayer.ships.cruiserAfloat : this.state.redPlayer.ships.cruiserAfloat;
      let submarine = this.state.isBluePlayerFiring ? this.state.bluePlayer.ships.submarineAfloat : this.state.redPlayer.ships.submarineAfloat;
      let destroyer = this.state.isBluePlayerFiring ? this.state.bluePlayer.ships.destroyerAfloat : this.state.redPlayer.ships.destroyerAfloat;
      let opponentScore = this.state.isBluePlayerFiring ? this.state.redPlayer.score : this.state.bluePlayer.score;
      let opponentSinking = this.state.isBluePlayerFiring ? this.state.redPlayer.messages.sinking : this.state.bluePlayer.messages.sinking;
      let opponentWin = this.state.isBluePlayerFiring ? this.state.redPlayer.messages.win : this.state.bluePlayer.messages.win;

      if ((player === 'bluePlayer' && this.state.isBluePlayerFiring === true) || (player === 'redPlayer' && this.state.isBluePlayerFiring === false)) {

        if (roundBoard[row][col] > 0) {
          score += 5;
          roundBoard[row][col] = -1;
          newShot = 'Firing on ' + roundBoard[row][0] + col + '...Direct Hit!';
        }
        else if (roundBoard[row][col] === 0) {
          score -= 1;
          roundBoard[row][col] = -2;
          newShot = 'Firing on ' + roundBoard[row][0] + col + '...Miss!';
        }
        else if (roundBoard[row][col] < 0) {
          score -= 3;
          newShot = 'You have already fired on this location. Try Again.';
        }

        // This returns a check of the board to see if it is now a winner
        let tracker = checkWinner(roundBoard);

        switch (true) {
          case(tracker[0] === 0 && carrier === true):
            score += 3;
            nowSinking = "The enemy's Aircraft Carrier is sinking!";
            carrier= false;
            break;
          case(tracker[1] === 0 && battleship === true):
            score += 3;
            nowSinking = "The enemy's Battleship is sinking!";
            battleship= false;
            break;
          case(tracker[2] === 0 && cruiser === true):
            score += 3;
            nowSinking = "The enemy's Destroyer is sinking!";
            cruiser= false;
            break;
          case(tracker[3] === 0 && submarine === true):
            score += 3;
            nowSinking = "The enemy's Submarine is sinking!";
            submarine= false;
            break;
          case(tracker[4] === 0 && destroyer === true):
            score += 3;
            nowSinking = "The enemy's Destroyer' is sinking!";
            destroyer= false;
            break;
          default:
            if (tracker.reduce(((a, b) => a+b), 0) === 0) {
              if (tracker.reduce(((a, b) => a+b), 0) === 0) {
                if (score <= 0) {
                  score = 0;
                }
                score *= 100;
                if (opponentScore <= 0) {
                  opponentScore = 0;
                }
                opponentScore *= 100;
                newShot = 'VICTORY!';
                newWin = 'You have sunk all of the enemy\'s ships!';
                nowSinking = `SCORE: ${score}`;
                opponentSinking = `SCORE: ${opponentScore}`;
                opposingShotDisplay = 'DEFEAT!';
                opponentWin = 'All of your ships have been sunk!';
                // add fetch here to POST Scores
              };
            };
        }

        // if (tracker[0] === 0 && carrier === true) {
        //   score += 3;
        //   nowSinking = 'The enemy\'s Aircraft Carrier is sinking!';
        //   carrier= false;
        // };
        // if (tracker[1] === 0 && battleship === true) {
        //   score += 3;
        //   nowSinking = 'The enemy\'s Battleship is sinking!';
        //   battleship = false;
        // };
        // if (tracker[2] === 0 && cruiser === true) {
        //   score += 3;
        //   nowSinking = 'The enemy\'s Destroyer is sinking!';
        //   cruiser = false;
        // };
        // if (tracker[3] === 0 && submarine === true) {
        //   score += 3;
        //   nowSinking = 'The enemy\'s Submarine is sinking!';
        //   submarine = false;
        // };
        // if (tracker[4] === 0 && destroyer === true) {
        //   score += 3;
        //   nowSinking = 'The enemy\'s Patrol Boat is sinking!';
        //   destroyer = false;
        // };
        if (tracker.reduce(((a, b) => a+b), 0) === 0) {
          if (score <= 0) {
            score = 0;
          }
          score *= 100;
          if (opponentScore <= 0) {
            opponentScore = 0;
          }
          opponentScore *= 100;
          newShot = 'VICTORY!';
          newWin = 'You have sunk all of the enemy\'s ships!';
          nowSinking = `SCORE: ${score}`;
          opponentSinking = `SCORE: ${opponentScore}`;
          opposingShotDisplay = 'DEFEAT!';
          opponentWin = 'All of your ships have been sunk!';
          // add fetch here to POST Scores
        };
        
        // This part finishes up by setting the new state values
        // if (this.state.isBluePlayerFiring === true ) {
          // let player = bluePlayer;
          // let opponent =
        if (this.state.isBluePlayerFiring === true ) {
          this.setState({ 
            bluePlayer: {
              ...this.state.bluePlayer,
              board: roundBoard,
              messages: {
                shot: newShot,
                sinking: nowSinking,
                win: newWin,
              },
              score: score,
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
                shot: newShot,
                sinking: nowSinking,
                win: newWin,
              },
              score: score,
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
        {/* <div>
          <ChooseGame/>
        </div> */}
      </div>
    )
  }
}

export default App;

// design a modal to pop up and either (new game / set pieces) or (load previous game) at start

// build schema
// build ExampleData object
// link client / router / db

// make game persistent
// store high scores arcade game style

// make responsive for mobile or web deployment
// make a computer/AI to play against

// componentDidMount() {}