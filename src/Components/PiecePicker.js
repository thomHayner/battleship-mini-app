import React from "react";
import './piecePicker.css';
import '../App.css';
import Square from "./Elements/Square";
import shipPlacer from '../Logic/shipPlacer';

class DragDiv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStart: props.gameStart,
      currentShipRef: React.createRef(),
      currentValue: 0,
      currentLength: 0,
      currentVert: false,
      ships: [
        {
          name: "carrier",
          value: 1,
          shipArr: [1,1,1,1,1],
          vert: true,
        },
        {
          name: "battleship",
          value: 2,
          shipArr: [2,2,2,2],
          vert: true,
        },
        {
          name: "cruiser",
          value: 3,
          shipArr: [3,3,3],
          vert: true,
        },
        {
          name: "submarine",
          value: 4,
          shipArr: [4,4,4],
          vert: true,
        },
        {
          name: "destroyer",
          value: 5,
          shipArr: [5,5],
          vert: true,
        },
      ],
      board: 
      // If you change the board values, the squares' className will change and it may affect drop-zones
        [
          ["","1","2","3","4","5","6","7","8","9","10",],
          ["A",-2,-2,-2,-2,-2,-2,-2,-2,-2,-2],
          ["B",-2,-2,-2,-2,-2,-2,-2,-2,-2,-2],
          ["C",-2,-2,-2,-2,-2,-2,-2,-2,-2,-2],
          ["D",-2,-2,-2,-2,-2,-2,-2,-2,-2,-2],
          ["E",-2,-2,-2,-2,-2,-2,-2,-2,-2,-2],
          ["F",-2,-2,-2,-2,-2,-2,-2,-2,-2,-2],
          ["G",-2,-2,-2,-2,-2,-2,-2,-2,-2,-2],
          ["H",-2,-2,-2,-2,-2,-2,-2,-2,-2,-2],
          ["I",-2,-2,-2,-2,-2,-2,-2,-2,-2,-2],
          ["J",-2,-2,-2,-2,-2,-2,-2,-2,-2,-2],
        ],
      lastBoard: 
      // If you change the board values, the squares' className will change and it may affect drop-zones
        [
          ["","1","2","3","4","5","6","7","8","9","10",],
          ["A",-2,-2,-2,-2,-2,-2,-2,-2,-2,-2],
          ["B",-2,-2,-2,-2,-2,-2,-2,-2,-2,-2],
          ["C",-2,-2,-2,-2,-2,-2,-2,-2,-2,-2],
          ["D",-2,-2,-2,-2,-2,-2,-2,-2,-2,-2],
          ["E",-2,-2,-2,-2,-2,-2,-2,-2,-2,-2],
          ["F",-2,-2,-2,-2,-2,-2,-2,-2,-2,-2],
          ["G",-2,-2,-2,-2,-2,-2,-2,-2,-2,-2],
          ["H",-2,-2,-2,-2,-2,-2,-2,-2,-2,-2],
          ["I",-2,-2,-2,-2,-2,-2,-2,-2,-2,-2],
          ["J",-2,-2,-2,-2,-2,-2,-2,-2,-2,-2],
        ],
    };

    this.handleClickOrientation = this.handleClickOrientation.bind(this)
    // Handlers for the piece that is being dragged
    this.handleDrag = this.handleDrag.bind(this);
    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDragEnd = this.handleDragEnd.bind(this);

    // Handlers for the drop-zones
    this.handleDragEnter = this.handleDragEnter.bind(this);
    this.handleDragLeave = this.handleDragLeave.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  };

  // When you click a piece (and the piece is inside it's starting container), it should change that
  //  piece's state.ships[value-1].vert value
  handleClickOrientation = (e, tempValue, vert) => {
    e.stopPropagation();
    let tempShip = e.target

    // First bring in the whole ships object
    let tempShips = this.state.ships;
    let shipIndex = tempValue
    let ship = tempShips[shipIndex]
    setTimeout(()=>{}, 0)
    // Next, edit the values in the tempObject
    // ship.vert = !ship.vert
    // Then, set the stateObject to the value of the tempObject
    this.setState({ ships: tempShips })
    console.log(this.state.ships)
    console.log(tempShips)
    console.log(shipIndex)
    console.log(this.state.ships[shipIndex])
    console.log(e.target.children[0].value)


    // if (vert === true) {
      //   e.target.style = { width: length, height: '25px', display: 'inline', flexDirection: 'row', backgroundColor: '#fff' }
      // } else {
        //   e.target.style = { width: '25px', height: length }
        // }
    // this.setState({ currentVert: vert });
    
  }

  // Handlers for the piece that is being dragged
  handleDragStart = (e, tempValue, tempVert) => {
    let tempShip = e.target;
    let tempLength = e.target.children.length;
    this.setState({ 
      currentShipRef: tempShip,
      currentLength: tempLength,
      currentValue: tempValue,
      currentVert: tempVert,
    });
  };

  handleDrag = e => {
  };
  
  handleDragEnd = e => {
  };

  // Handlers for the drop-zones
  handleDragEnter = (e, row, col) => {
    e.preventDefault();
    e.stopPropagation();
  };

  handleDragLeave = (e, row, col) => {
    // e.preventDefault();
    // e.stopPropagation();
  };

  handleDragOver = e => {
    // These two are necessary to enable the 'drop' feature/function
    e.preventDefault();
    e.stopPropagation();
  };

  handleDrop = (e, row, col) => {
    if (row === undefined || col === undefined) {
      return
    }

    if (e.target.className === "placement-square-empty" || e.target.className === "ship") {
      e.preventDefault();
      e.stopPropagation();
      let board = this.state.board;
      let length = this.state.currentLength;
      let value = this.state.currentValue

      board.map((i,k) => (i.map((j,l) => board[k][l] === value ? board[k][l] = -2 : j )))
      // If vertical:
      if (this.state.ships[value - 1].vert) {
        // if (row + length) is greater than 10, that means the piece will hit the edge of the wall,
        // so we need to correct for that possibility.
        if (row > 11 - length) { 
          row = 11 - length;
        };
        // set the 'ship' squares for the column of ship pieces
        for (let i = 0; i < this.state.currentLength; i++) {
          board[row + i][col] = value;
        };
      // Else, if horizontal:
      } else {
        // if (col + length) is greater than 10, that means the piece will hit the edge of the wall,
        // so, we need to correct for that possibility.
        if (col > 11 - length) { 
          col = 11 - length;
        };
        // set the 'ship' squares for the row of ship pieces
        for (let i = 1; i < this.state.currentLength; i++) {
          board[row][col + i] = value;
        };
      }
      // Set the state to save the board
      this.setState({ board: board, lastBoard: board });
      console.log(board)

      // Append the 'ship' to the board
      // e.target.append(this.state.currentShipRef);
    };
  };

  componentDidMount() {
    let squares = document.querySelectorAll('.placement-square-empty');
    squares.forEach(square => {
        square.addEventListener('dragover', this.handleDragOver);
        square.addEventListener('dragenter', this.handleDragEnter);
        square.addEventListener('dragleave', this.handleDragLeave);
        square.addEventListener('drop', this.handleDrop);
    })
    let ships = document.querySelectorAll('.ship-outer-div');
    ships.forEach(ship => {
      ship.addEventListener('dragstart', this.handleDragStart);
      ship.addEventListener('dragend', this.handleDragEnd);
      ship.addEventListener('drag', this.handleDrag);
      ship.addEventListener('click', this.handleClickOrientation);
    })
  }

  componentWillUnmount() {
    let squares = document.querySelectorAll('.placement-square-empty')
    squares.forEach(square => {
      square.removeEventListener('dragover', this.handleDragOver);
      square.removeEventListener('dragenter', this.handleDragEnter);
      square.removeEventListener('dragleave', this.handleDragLeave);
      square.removeEventListener('drop', this.handleDrop);

    });
    let ships = document.querySelectorAll('.ship-outer-div');
    ships.forEach(ship => {
      ship.removeEventListener('dragstart', this.handleDragStart);
      ship.removeEventListener('dragend', this.handleDragEnd);
      ship.removeEventListener('drag', this.handleDrag);
      ship.removeEventListener('click', this.handleClickOrientation);
    });
  };

  render() {
    return(
      <div className="main-container">
        <div className="board" >
          {this.state.board.map( (i, row) => 
            this.state.board.map( (j, col) => (
                <Square 
                  key={`PlacementBoard_[${row}, ${col}]ID`} 
                  id={`PlacementBoard_${row * col}`} 
                  value={this.state.board[row][col]} 
                  row={row} 
                  col={col} 
                  playerId={0} 
                  gameStart={this.state.gameStart} 
                  onDragEnter={(e, row, col) => this.handleDragEnter(e, row, col)} 
                  onDragLeave={(e, row, col)=>this.handleDragLeave(e, row, col)} 
                  onDragOver={e=>this.handleDragOver(e)} 
                  onDrop={(e, row, col)=>this.handleDrop(e, row, col)} 
                />
            ))
          )}
        </div>
        <div className="outer-drop-and-button-area-column" >
          <div className="outer-drop-zones-area-row" >
            <div>
              {this.state.ships.map((ship, i) => (
                <div 
                  key={`${ship.name}_outer_drop_zone`}
                  className="outer-drop-zone" 
                  onDragEnter={e=>this.handleDragEnter(e)} 
                  onDragLeave={e=>this.handleDragLeave(e)} 
                  onDragOver={e=>this.handleDragOver(e)} 
                  onDrop={e=>this.handleDrop(e)} 
                  ship={ship}
                >
                  <div
                    draggable="true" 
                    className="ship-outer-div" 
                    length={ship.shipArr.length} 
                    value={ship.value} 
                    vert={ship.vert} 
                    onDragStart={e=>this.handleDragStart(e, ship.value, ship.vert)} 
                    onClick={e=>this.handleOrientation(e, i, ship.vert)} 
                    style={{ width: `${ship.shipArr.length * 25}px`, height: `25px` }}  // e.target.style = 
                  >
                    {ship.shipArr.map((square, j) => (
                    <Square key={`${ship.name}_${j}`} value={ship.value} gameStart={this.state.gameStart}/* vert={ship.vert} ship={ship} draggable="false" *//>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <button href="#" onClick={shipPlacer()}>Random</button>
          </div>
        </div>
      </div>
    );
  };
};

export default DragDiv
