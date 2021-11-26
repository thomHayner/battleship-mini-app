import React from "react";
import './piecePicker.css';
import '../App.css';
import Square from "./Elements/Square";

class DragDiv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStart: props.gameStart,
      currentShipRef: React.createRef(),
      currentLength: 0,
      ships: [
        {
          name: "carrier",
          value: 1,
          longness: 5,
          shipArr: [1,1,1,1,1],
        },{
          name: "battleship",
          value: 2,
          longness: 4,
          shipArr: [2,2,2,2],
        },{
          name: "cruiser",
          value: 3,
          longness: 3,
          shipArr: [3,3,3],
        },{
          name: "submarine",
          value: 4,
          longness: 3,
          shipArr: [4,4,4],
        },{
          name: "destroyer",
          value: 5,
          longness: 2,
          shipArr: [5,5],
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
    };

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

  // Handlers for the piece that is being dragged
  handleDragStart = e => {
    let tempShip = e.target;
    let tempLength = e.target.children.length;

    this.setState({ currentShipRef: tempShip, currentLength: tempLength });

    // This setTimeout() might help the setState happen more smoothly
    // (saw this in a tutorial, not 100% sure if that is what it was for)
    setTimeout(()=>{}, 0);
  };

  handleDrag = e => {
  };
  
  handleDragEnd = e => {
  };

  // Handlers for the drop-zones
  handleDragEnter = (e, row, col) => {
    if (e.target.className === "placement-square-empty" || e.target.className === "placement-square-fill") {
      e.preventDefault();
      e.stopPropagation();
      let board = this.state.board;
      // if (vertical) {}
      for (let i = 1; i < this.state.currentLength; i++) {
        board[row + i][col] = -1;
      }
      this.setState({ board: board });
      setTimeout(()=>{}, 0);
    }
  };

  handleDragLeave = (e, row, col) => {
    e.preventDefault();
    e.stopPropagation();
  };

  handleDragOver = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  handleDrop = (e, row, col) => {
    e.preventDefault();
    e.stopPropagation();

    let board = this.state.board;
    // if (vertical) {
      for (let i = 0; i < this.state.currentLength; i++) {
        board[row + i][col] = -1;
      }
    // else {
    //   for (let i = 0; i < this.state.currentLength; i++) {
    //     board[row][col + i] = -1;
    //   }
    // }
    this.setState({ board: board });
    e.target.append(this.state.currentShipRef)
  };

  componentDidMount() {
    let squares = document.querySelectorAll('.square');
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
    })
  }

  componentWillUnmount() {
    let squares = document.querySelectorAll('.square')
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
                  onDragEnter={(e, squareId) => this.handleDragEnter(e, squareId)} 
                  onDragLeave={(e, squareId)=>this.handleDragLeave(e, squareId)} 
                  onDragOver={e=>this.handleDragOver(e)} 
                  onDrop={(e, squareId)=>this.handleDrop(e, row, col)} 
                />
            ))
          )}
        </div>
        <div>
          <div>
            {this.state.ships.map((ship, i) => (
              <div 
                key={`${ship.name}_outer_drop_zone`}
                className="outer-drop-zone" 
                onDragEnter={e=>this.handleDragEnter(e)} 
                onDragLeave={e=>this.handleDragLeave(e)} 
                onDragOver={e=>this.handleDragOver(e)} 
                onDrop={e=>this.handleDrop(e)} 
              >
                <div
                  draggable="true" 
                  className="ship-outer-div" 
                  longness={ship.shipArr.length}
                >
                  {ship.shipArr.map((square, j) => (
                  <Square key={`${ship.name}_${j}`} value={ship.value} gameStart={this.state.gameStart} draggable="false" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
};

export default DragDiv
