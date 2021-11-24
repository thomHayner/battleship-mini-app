import React from "react";
import './piecePicker.css';
import '../App.css';
import Square from "./Elements/Square";

class DragDiv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentShipRef: React.createRef(),
      currentRow: 1,
      currentCol: 1,
      shipsArr: [ [1,1,1,1,1], [2,2,2,2], [3,3,3], [4,4,4], [5,5] ],
      board: [
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

    // This dynamically creates refs, one ref for each board square
    for (let i = 1; i <= 100; i++) {
      this[`square_${i}`] = React.createRef();
    }
    this.dropRef = React.createRef();
    
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
    console.log('Start');
    console.log(e.target);
    let tempShip = e.target;
    this.setState({ currentShipRef: tempShip });
    // This setTimeout() might help the setState happen more smoothly
    // (saw this in a tutorial, not 100% sure if that is what it was for)
    setTimeout(()=>{}, 0);
  };

  handleDrag = e => {
  };
  
  handleDragEnd = e => {
  };

  // Handlers for the drop-zones
  handleDragEnter = (e, squareId) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Enter');
    let className = e.target.className;
    setTimeout(()=>{}, 0);
    if (className === 'placement-square-empty'){
      className = "placement-square-hovered";
      e.target.className = className;
    };
  };

  handleDragLeave = (e, squareId) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Leave');
    let className = e.target.className;
    setTimeout(()=>{}, 0);
    if (className === 'placement-square-hovered'){
      className = "placement-square-empty";
      e.target.className = className;
    };
    // console.log(e);
  };

  handleDragOver = e => {
    e.preventDefault();
    e.stopPropagation();
    // console.log('Over');
  };

  handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e);
    let parent = e.target;
    parent.value = -1;

    let kiddo = this.state.currentShipRef;
    // console.log(this.currentShipRef);
    console.log('Drop');
    parent.append(kiddo);
  };

  componentDidMount() {
    if (this.dropRef.current) {
      let div = this.dropRef.current;
      div.addEventListener('dragover', this.handleDragOver);
      div.addEventListener('dragenter', this.handleDragEnter);
      div.addEventListener('dragleave', this.handleDragLeave);
      div.addEventListener('drop', this.handleDrop);
    }

    let ships = document.querySelectorAll('.ship');
    ships.forEach(ship => {
      ship.addEventListener('dragstart', this.handleDragStart);
      ship.addEventListener('dragend', this.handleDragEnd);
      ship.addEventListener('drag', this.handleDrag);
    })
  }

  componentWillUnmount() {
    if (this.dropRef.current) {
      let div = this.dropRef.current;
      div.removeEventListener('dragover', this.handleDragOver);
      div.removeEventListener('dragenter', this.handleDragEnter);
      div.removeEventListener('dragleave', this.handleDragLeave);
      div.removeEventListener('drop', this.handleDrop);
    };
    let ships = document.querySelectorAll('.ship');
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
                  id={`PlacementBoard_[${row * col}`} 
                  ref={this[`square_${row * col}`]}
                  value={this.state.board[row][col]} 
                  row={row} 
                  col={col} 
                  playerId={0} 
                  onDragEnter={e=>this.handleDragEnter(e)} 
                  onDragLeave={e=>this.handleDragLeave(e)} 
                  onDragOver={e=>this.handleDragOver(e)} 
                  onDrop={e=>this.handleDrop(e)} 
                />
            ))
          )}
        </div>
        <div>
          <div>
            <div 
              className="outer-drop-zone" 
              onDragEnter={e=>this.handleDragEnter(e)} 
              onDragLeave={e=>this.handleDragLeave(e)} 
              onDragOver={e=>this.handleDragOver(e)} 
              onDrop={e=>this.handleDrop(e)} 
            >
              <div
                draggable="true" 
                className="ship" 
              >
                <Square value={-1} />
                <Square value={-1} />
                <Square value={-1} />
                <Square value={-1} />
                <Square value={-1} />
              </div>
            </div>

            <div 
              className="outer-drop-zone" 
              onDragEnter={e=>this.handleDragEnter(e)} 
              onDragLeave={e=>this.handleDragLeave(e)} 
              onDragOver={e=>this.handleDragOver(e)} 
              onDrop={e=>this.handleDrop(e)} 
            >

              <div 
                draggable="true" 
                className="ship" 
              >
                <Square value={-1} />
                <Square value={-1} />
                <Square value={-1} />
                <Square value={-1} />
              </div>
            </div>

            <div 
              className="outer-drop-zone" 
              onDragEnter={e=>this.handleDragEnter(e)} 
              onDragLeave={e=>this.handleDragLeave(e)} 
              onDragOver={e=>this.handleDragOver(e)} 
              onDrop={e=>this.handleDrop(e)} 
            >
              <div
                draggable="true" 
                className="ship" 
              >
                <Square value={-1} />
                <Square value={-1} />
                <Square value={-1} />
              </div>
            </div>
            </div>

            <div>
            <div 
              className="outer-drop-zone" 
              onDragEnter={e=>this.handleDragEnter(e)} 
              onDragLeave={e=>this.handleDragLeave(e)} 
              onDragOver={e=>this.handleDragOver(e)} 
              onDrop={e=>this.handleDrop(e)} 
            >
              <div
                draggable="true" 
                className="ship" 
              >
                <Square value={-1} />
                <Square value={-1} />
                <Square value={-1} />
              </div>
            </div>

            <div 
              className="outer-drop-zone" 
              onDragEnter={e=>this.handleDragEnter(e)} 
              onDragLeave={e=>this.handleDragLeave(e)} 
              onDragOver={e=>this.handleDragOver(e)} 
              onDrop={e=>this.handleDrop(e)} 
            >
              <div
                draggable="true" 
                className="ship" 
              >
                <Square value={-1} />
                <Square value={-1} />
              </div>
            </div>

            <div 
              className="outer-drop-zone" 
              onDragEnter={e=>this.handleDragEnter(e)} 
              onDragLeave={e=>this.handleDragLeave(e)} 
              onDragOver={e=>this.handleDragOver(e)} 
              onDrop={e=>this.handleDrop(e)} 
            >
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default DragDiv
