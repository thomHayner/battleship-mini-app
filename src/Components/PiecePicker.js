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
      currentValue: 0,
      currentLength: 0,
      ships: [
        {
          name: "carrier",
          value: 1,
          shipArr: [1,1,1,1,1],
        },{
          name: "battleship",
          value: 2,
          shipArr: [2,2,2,2],
        },{
          name: "cruiser",
          value: 3,
          shipArr: [3,3,3],
        },{
          name: "submarine",
          value: 4,
          shipArr: [4,4,4],
        },{
          name: "destroyer",
          value: 5,
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
  handleDragStart = (e, tempValue) => {
    let tempShip = e.target;
    let tempLength = e.target.children.length;
    this.setState({ 
      currentShipRef: tempShip,
      currentLength: tempLength,
      currentValue: tempValue,
    });

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
    if (e.target.className !== "ship" && e.target.className !== "outer-drop-zone") {
      e.preventDefault();
      e.stopPropagation();
      let board = this.state.board;
      let length = this.state.currentLength;
      // if (vertical) {
        // if (row + length is greater than 10, that means the piece will hit the edge of the wall, so we need to correct for that possibility
        if (row > 11 - length) { 
        row = 11 - length;
        };
        for (let i = 1; i < this.state.currentLength; i++) {
          board[row + i][col] = -1;
        };
        // } else if (horizontal) {}
        this.setState({ board: board });
      setTimeout(()=>{}, 0);
    };
  };

  handleDragLeave = (e, row, col) => {
    if (e.target.className === "placement-square-empty" || e.target.className === "placement-square-fill" || e.target.className === "square") {
      e.preventDefault();
      e.stopPropagation();
      // let board = this.state.board;
      // let length = this.state.currentLength;
      // It doesn't matter if this is vert or horiz, this just returns the last board to preserve previous ship placements
      this.setState({ board: this.state.lastBoard });
      setTimeout(()=>{}, 0);
    };
  };

  handleDragOver = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  handleDrop = (e, row, col) => {
    if (row === undefined || col === undefined) { return }
    e.preventDefault();
    e.stopPropagation();
    let board = this.state.board;
    let length = this.state.currentLength;
    let value = this.state.currentValue

    board.map((i,k) => (i.map((j,l) => board[k][l] === value ? board[k][l] = -2 : j )))

    // If the piece is vertically oriented
    // if (vertical) {
      // if (row + length is greater than 10, that means the piece will hit the edge of the wall, so we need to correct for that possibility
      if (row > 11 - length) { 
        row = 11 - length;
      };
      for (let i = 1; i < this.state.currentLength; i++) {
        board[row + i][col] = value;
      };
    // } else if (horizontal) {
    //   if (row > 11 - length) { 
    //     row = 11 - length;
    //   };
    //   console.log(ship)
    //   for (let i = 1; i < this.state.currentLength; i++) {
    //     board[row + i][col] = ship.value;
    //   };
    // }
    this.setState({ board: board, lastBoard: board });
    e.target.append(this.state.currentShipRef);
    // setTimeout(()=>{}, 0);
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
                  gameStart={this.state.gameStart} 
                  onDragEnter={(e, row, col) => this.handleDragEnter(e, row, col)} 
                  onDragLeave={(e, row, col)=>this.handleDragLeave(e, row, col)} 
                  onDragOver={e=>this.handleDragOver(e)} 
                  onDrop={(e, row, col)=>this.handleDrop(e, row, col)} 
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
                  onDragStart={e=>this.handleDragStart(e, ship.value)}
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
