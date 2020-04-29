fireControlHandler = (row, col) => {
    if (this.state.win.length === 35) {
      let newShot = this.state.shot;
      let nowSinking = this.state.sinking;
      let newWin = this.state.win;
      let roundBoard;
      let carrier;
      let battleship;
      let destroyer;
      let submarine;
      let patrolBoat;

      if (this.state.isTheEnemyFiring === true ) {
        roundBoard = this.state.enemyBoard.slice();
        carrier = this.state.enemyCarrierAfloat;
        battleship = this.state.enemyBattleshipAfloat;
        destroyer = this.state.enemyDestroyerAfloat;
        submarine = this.state.enemySubmarineAfloat;
        patrolBoat = this.state.enemyPatrolBoatAfloat;
      } else {
        roundBoard = this.state.playerBoard.slice()
        carrier = this.state.playerCarrierAfloat;
        battleship = this.state.playerBattleshipAfloat;
        destroyer = this.state.playerDestroyerAfloat;
        submarine = this.state.playerSubmarineAfloat;
        patrolBoat = this.state.playerPatrolBoatAfloat;
      }

      if (roundBoard[row][col] > 0) {
        roundBoard[row][col] = -1;
        newShot = 'Firing on ' + roundBoard[row][0] + col + '...Direct Hit!';
      }
      else if (roundBoard[row][col] === 0) {
        roundBoard[row][col] = -2;
        newShot = 'Firing on ' + roundBoard[row][0] + col + '...Miss!';
      }
      else if (roundBoard[row][col] < 0) {
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
        nowSinking = 'The enemy\'s Aircraft Carrier is sinking!';
        carrier= false;
      };
      if (tracker[1] === 0 && battleship === true) {
        nowSinking = 'The enemy\'s Battleship is sinking!';
        battleship = false;
      };
      if (tracker[2] === 0 && destroyer === true) {
        nowSinking = 'The enemy\'s Destroyer is sinking!';
        destroyer = false;
      };
      if (tracker[3] === 0 && submarine === true) {
        nowSinking = 'The enemy\'s Submarine is sinking!';
        submarine = false;
      };
      if (tracker[4] === 0 && patrolBoat === true) {
        nowSinking = 'The enemy\'s Patrol Boat is sinking!';
        patrolBoat = false;
      };
      if (tracker.reduce(((a, b) => a+b), 0) === 0) {
        newShot = 'VICTORY!';
        newWin = 'You have sunk all of the enemy\'s ships!';
      };
      
      if (this.state.isTheEnemyFiring === true ) {
        this.setState({ 
            enemyBoard: roundBoard, 
            enemyCarrierAfloat: carrier,
            enemyBattleshipAfloat: battleship,
            enemyDestroyerAfloat: destroyer,
            enemySubmarineAfloat: submarine,
            enemyPatrolBoatAfloat: patrolBoat,
        });
      } else {
        this.setState({ 
            playerBoard: roundBoard, 
            playerCarrierAfloat: carrier,
            playerBattleshipAfloat: battleship,
            playerDestroyerAfloat: destroyer,
            playerSubmarineAfloat: submarine,
            playerPatrolBoatAfloat: patrolBoat,
        });
      }

      this.setState({ 
          isTheEnemyFiring: !this.state.isTheEnemyFiring, 
          shot: newShot, 
          sinking: nowSinking, 
          win: newWin,
      });
    }
  }





  // fireControlHandler = (row, col) => {
  //   if (this.state.win.length === 35) {
  //     let newShot = ' ';
  //     let nowSinking = ' ';
  //     let roundBoard;

  //     if (this.state.isTheEnemyFiring === true ) {
  //       roundBoard = this.state.enemyBoard.slice();
  //     } else {
  //       roundBoard = this.state.playerBoard.slice()
  //     }

  //     if (roundBoard[row][col] > 0) {
  //       roundBoard[row][col] = -1;
  //       newShot = 'Firing on ' + roundBoard[row][0] + col + '...Direct Hit!';
  //     }
  //     else if (roundBoard[row][col] === 0) {
  //       roundBoard[row][col] = -2;
  //       newShot = 'Firing on ' + roundBoard[row][0] + col + '...Miss!';
  //     }
  //     else if (roundBoard[row][col] < 0) {
  //       newShot = 'You have already fired on this location. Try Again.';
  //     }

  //     this.setState({ playerBoard: roundBoard, shot: newShot, sinking: 'The Enemy\'s fleet is near.' });

  //     let checkWinner = function(roundBoard) {
  //       let tracker = [0,0,0,0,0];

  //       for (let i = 1; i < 11; i++) {
  //         for (let j = 1; j < 11; j++) {
  //           switch ( roundBoard[i][j] ) {
  //             case 1:
  //               tracker[0]++
  //               break;
  //             case 2:
  //               tracker[1]++
  //               break;
  //             case 3:
  //               tracker[2]++
  //               break;
  //             case 4:
  //               tracker[3]++
  //               break;
  //             case 5:
  //               tracker[4]++
  //               break;
  //             default:
  //               ;
  //           }
  //         }
  //       }
  //       return tracker;
  //     }

  //     let tracker = checkWinner(roundBoard);
  //     if (tracker[0] === 0 && this.state.playerCarrierAfloat === true) {
  //       nowSinking = 'The enemy\'s Aircraft Carrier is sinking!';
  //       this.setState({ playerCarrierAfloat: false, sinking: nowSinking });
  //     };
  //     if (tracker[1] === 0 && this.state.playerBattleshipAfloat === true) {
  //       nowSinking = 'The enemy\'s Battleship is sinking!';
  //       this.setState({ playerBattleshipAfloat: false, sinking: nowSinking });
  //     };
  //     if (tracker[2] === 0 && this.state.playerDestroyerAfloat === true) {
  //       nowSinking = 'The enemy\'s Destroyer is sinking!';
  //       this.setState({ playerDestroyerAfloat: false, sinking: nowSinking });
  //     };
  //     if (tracker[3] === 0 && this.state.playerSubmarineAfloat === true) {
  //       nowSinking = 'The enemy\'s Submarine is sinking!';
  //       this.setState({ playerSubmarineAfloat: false, sinking: nowSinking });
  //     };
  //     if (tracker[4] === 0 && this.state.playerPatrolBoatAfloat === true) {
  //       nowSinking = 'The enemy\'s Patrol Boat is sinking!';
  //       this.setState({ playerPatrolBoatAfloat: false, sinking: nowSinking });
  //     };
  //     if (tracker.reduce(((a, b) => a+b), 0) === 0) {
  //       this.setState({ shot: 'VICTORY!', win: 'You have sunk all of the enemy\'s ships!' });
  //     };
  //     this.setState({ isTheEnemyFiring: !this.state.isTheEnemyFiring });
  //   }
  // }
