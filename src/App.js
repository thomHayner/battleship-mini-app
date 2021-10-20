import React from 'react';
import WhoseTurnIsItAnyway from './Components/DisplayMessages/WhoseTurnIsItAnyway';
import PlayerName from './Components/DisplayMessages/PlayerName';
import Board from './Components/Board/Board';
import Shot from './Components/DisplayMessages/Shot';
import Sinking from './Components/DisplayMessages/Sinking';
import Winner from './Components/DisplayMessages/Winner';
import Carrier from './Components/Ships/Carrier';
import Battleship from './Components/Ships/Battleship';
import Destroyer from './Components/Ships/Destroyer';
import Submarine from './Components/Ships/Submarine';
import PatrolBoat from './Components/Ships/Cruiser';
// import FireControlHandler from './Logic/FireControlHandler';
import './App.css';
import ChooseGame from './Pages/ChooseGameLandingPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highScores: [],
      turnNumber: 0,
      isTheEnemyFiring: false,
      playerBoard: [
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
        ["J",1,1,1,1,1,0,0,0,5,5]
            ],
      enemyBoard: [
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
        ["J",0,0,0,0,0,0,0,0,0,0]
            ],
      playerName: "Player 1",
      playerShot: 'Ready to fire. Awaiting your orders, Sir!',
      playerSinking: 'The Enemy\'s fleet is near.',
      playerWin: 'There are still more ships to sink.',
      playerScore: 0, 
      playerCarrierAfloat: true,
      playerBattleshipAfloat: true,
      playerCruiserAfloat: true,
      playerSubmarineAfloat: true,
      playerDestroyerAfloat: true,
      enemyName: "Player 2",
      enemyShot: 'The Enemy is targeting us, Sir!',
      enemySinking: 'The Enemy\'s fleet is near.',
      enemyWin: 'There are still more ships to sink.',
      enemyScore: 0,
      enemyCarrierAfloat: true,
      enemyBattleshipAfloat: true,
      enemyCruiserAfloat: true,
      enemySubmarineAfloat: true,
      enemyDestroyerAfloat: true,
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
    if (this.state.playerShot !== 'VICTORY!' && this.state.enemyShot !== 'VICTORY!') {
      let newTurnNumber = this.state.turnNumber + 1;
      let newShot;
      let opposingShotDisplay = 'Ready to fire. Awaiting your orders, Sir!';
      let nowSinking = 'The Enemy\'s fleet is near.';
      let newWin;
      let roundBoard;
      let carrier;
      let battleship;
      let cruiser;
      let submarine;
      let destroyer;
      let score;
      let opponentScore;
      let opponentSinking;
      let opponentWin;

      if (this.state.isTheEnemyFiring === true ) {
        roundBoard = this.state.enemyBoard.slice();
        newShot = this.state.enemyShot;
        newWin = this.state.enemyWin;
        score = this.state.enemyScore;
        opponentScore = this.state.playerScore;
        opponentSinking = this.state.playerSinking;
        opponentWin = this.state.playerWin;
        carrier = this.state.enemyCarrierAfloat;
        battleship = this.state.enemyBattleshipAfloat;
        cruiser = this.state.enemyCruiserAfloat;
        submarine = this.state.enemySubmarineAfloat;
        destroyer = this.state.enemyDestroyerAfloat;
      } else {
        roundBoard = this.state.playerBoard.slice()
        newShot = this.state.playerShot;
        newWin = this.state.playerWin;
        score = this.state.playerScore;
        opponentScore = this.state.enemyScore;
        opponentSinking = this.state.enemySinking;
        opponentWin = this.state.enemyWin;
        carrier = this.state.playerCarrierAfloat;
        battleship = this.state.playerBattleshipAfloat;
        cruiser = this.state.playerCruiserAfloat;
        submarine = this.state.playerSubmarineAfloat;
        destroyer = this.state.playerDestroyerAfloat;
      }

      if ((player === 'Player 2' && this.state.isTheEnemyFiring === true) || (player === 'Player 1' && this.state.isTheEnemyFiring === false)) {

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

        let checkWinner = function(roundBoard) {
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

        let tracker = checkWinner(roundBoard);

        if (tracker[0] === 0 && carrier === true) {
          score += 3;
          nowSinking = 'The enemy\'s Aircraft Carrier is sinking!';
          carrier= false;
        };
        if (tracker[1] === 0 && battleship === true) {
          score += 3;
          nowSinking = 'The enemy\'s Battleship is sinking!';
          battleship = false;
        };
        if (tracker[2] === 0 && cruiser === true) {
          score += 3;
          nowSinking = 'The enemy\'s Destroyer is sinking!';
          cruiser = false;
        };
        if (tracker[3] === 0 && submarine === true) {
          score += 3;
          nowSinking = 'The enemy\'s Submarine is sinking!';
          submarine = false;
        };
        if (tracker[4] === 0 && destroyer === true) {
          score += 3;
          nowSinking = 'The enemy\'s Patrol Boat is sinking!';
          destroyer = false;
        };
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
        
        if (this.state.isTheEnemyFiring === true ) {
          this.setState({ 
              enemyBoard: roundBoard, 
              enemyShot: newShot, 
              enemySinking: nowSinking, 
              enemyWin: newWin,
              enemyScore: score,
              enemyCarrierAfloat: carrier,
              enemyBattleshipAfloat: battleship,
              enemyCruiserAfloat: cruiser,
              enemySubmarineAfloat: submarine,
              enemyDestroyerAfloat: destroyer,
              playerShot: opposingShotDisplay,
              playerSinking: opponentSinking,
              playerWin: opponentWin,
          });
        } else {
          this.setState({ 
              playerBoard: roundBoard, 
              playerShot: newShot, 
              playerSinking: nowSinking, 
              playerWin: newWin,
              playerScore: score,
              playerCarrierAfloat: carrier,
              playerBattleshipAfloat: battleship,
              playerCruiserAfloat: cruiser,
              playerSubmarineAfloat: submarine,
              playerDestroyerAfloat: destroyer,
              enemyShot: opposingShotDisplay,
              enemySinking: opponentSinking,
              enemyWin: opponentWin,
          });
        }

        this.setState({ 
            turnNumber: newTurnNumber, 
            isTheEnemyFiring: !this.state.isTheEnemyFiring, 
        });
      }
    }
  }

  render() {
      return (
        <div className="App">

          <header className="App-header" >
            <h1>Battleship</h1>
            <WhoseTurnIsItAnyway turn={this.state.isTheEnemyFiring} />
          </header>

          <div className="App-main" >

            <div className="player-area" >
              <PlayerName name={this.state.playerName} />
              <Board board={this.state.playerBoard} player={this.state.playerName} handleFire={ this.fireControlHandler } />
              <Shot shot={this.state.playerShot} />
              <Sinking sinking={this.state.playerSinking} />
              <Winner win={this.state.playerWin} />
              <div className="ship-list-area" >
                <div className="player-ship-list" >
                <div><strong>My Ships:</strong></div>
                  <Carrier afloat={this.state.enemyCarrierAfloat} />
                  <Battleship afloat={this.state.enemyBattleshipAfloat} />
                  <Destroyer afloat={this.state.enemyCruiserAfloat} />
                  <Submarine afloat={this.state.enemySubmarineAfloat} />
                  <PatrolBoat afloat={this.state.enemyDestroyerAfloat} />
                </div>
                <div></div>
                <div className="enemy-ship-list" >
                  <div><strong>Enemy Ships:</strong></div>
                  <Carrier afloat={this.state.playerCarrierAfloat} />
                  <Battleship afloat={this.state.playerBattleshipAfloat} />
                  <Destroyer afloat={this.state.playerCruiserAfloat} />
                  <Submarine afloat={this.state.playerSubmarineAfloat} />
                  <PatrolBoat afloat={this.state.playerDestroyerAfloat} />
                </div>
              </div>
            </div>
            <div className="player-area" >
              <PlayerName name={this.state.enemyName} />
              <Board board={this.state.enemyBoard} player={this.state.enemyName} handleFire={ this.fireControlHandler } />
              <Shot shot={this.state.enemyShot} />
              <Sinking sinking={this.state.enemySinking} />
              <Winner win={this.state.enemyWin} />
              <div className="ship-list-area" >
                <div className="player-ship-list" >
                  <div><strong>My Ships:</strong></div>
                  <Carrier afloat={this.state.playerCarrierAfloat} />
                  <Battleship afloat={this.state.playerBattleshipAfloat} />
                  <Destroyer afloat={this.state.playerCruiserAfloat} />
                  <Submarine afloat={this.state.playerSubmarineAfloat} />
                  <PatrolBoat afloat={this.state.playerDestroyerAfloat} />
                </div>
                <div></div>
                <div className="enemy-ship-list" >
                  <div><strong>Enemy Ships:</strong></div>
                  <Carrier afloat={this.state.enemyCarrierAfloat} />
                  <Battleship afloat={this.state.enemyBattleshipAfloat} />
                  <Destroyer afloat={this.state.enemyCruiserAfloat} />
                  <Submarine afloat={this.state.enemySubmarineAfloat} />
                  <PatrolBoat afloat={this.state.enemyDestroyerAfloat} />
                </div>
              </div>
            </div>

          </div>
          <div>
            <ChooseGame/>
          </div>

        </div>
      )
    }
}

  // design a modal to pop up and either (new game / set pieces) or (load previous game) at start
  
  // build router ?react router? --- no, react reouter is not a server, do NOT research this till later
  // build schema
  // build ExampleData object
  // link client / router / db

  // make game persistent
  // store high scores arcade game style

  // make responsive for mobile or web deployment
  // make a computer/AI to play against

  // deploy to AWS

  // componentDidMount() {}

export default App;