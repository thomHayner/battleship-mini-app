import React from "react";
import './piecePicker.css';

class DragDiv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dragId: 0,
      dragClass: 'fill',
      dropClass: 'empty',
      dragging: false,
      dragCounter: 1,
      inDropZone: false,
      fill: document.querySelector('.fill'),
      empties: document.querySelectorAll('.empty'),
    };
    this.dragRef = React.createRef();
    this.dropRef = React.createRef();
    // this.handleDrag = this.handleDrag.bind(this);
    // this.handleDragStart = this.handleDragStart.bind(this);
    // this.handleDragEnd = this.handleDragEnd.bind(this);
    this.handleDragEnter = this.handleDragEnter.bind(this);
    this.handleDragLeave = this.handleDragLeave.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  };

  // handleDrag = e => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   console.log('Drag');
  // };

  // handleDragStart = e => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   console.log('Start');
  // };

  // handleDragEnd = e => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   console.log('End');
  // };

  handleDragEnter = e => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Enter');
  };

  handleDragLeave = e => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Leave');
  };

  handleDragOver = e => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Over');
  };

  handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();

    let parent = e.currentTarget
    let kiddo = this.dragRef.current
    let tempDropClass = 'empty';
    parent.className = tempDropClass
    
    parent.append(kiddo)
    console.log('Drop');
  };

  componentDidMount() {
    if (this.dropRef.current) {
      let div = this.dropRef.current 
      // div.addEventListener('drag', this.handleDrag)
      // div.addEventListener('dragstart', this.handleDragStart)
      // div.addEventListener('dragend', this.handleDragEnd)
      div.addEventListener('dragover', this.handleDragOver)
      div.addEventListener('dragenter', this.handleDragEnter)
      div.addEventListener('dragleave', this.handleDragLeave)
      div.addEventListener('drop', this.handleDrop)
    }
  };

  componentWillUnmount() {
    if (this.dropRef.current) {
      let div = this.dropRef.current 
      // div.removeEventListener('drag', this.handleDrag)
      // div.removeEventListener('dragstart', this.handleDragStart)
      // div.removeEventListener('dragend', this.handleDragEnd)
      div.removeEventListener('dragover', this.handleDragOver)
      div.removeEventListener('dragenter', this.handleDragEnter)
      div.removeEventListener('dragleave', this.handleDragLeave)
      div.removeEventListener('drop', this.handleDrop)
    }
  };

  render() {
    return(
      <div className="main-container">
        <div className="outer-drop-zone" 
        >
          <div 
              id={5} 
              className={this.state.dragClass} 
              draggable="true" 
              ref={this.dragRef} 
            >
            </div>
          <div 
            id={1} 
            className="empty"
            // className={this.state.dropClass} 
            ref={this.dropRef}
            onDragEnter={e=>this.handleDragEnter(e)} 
            onDragOver={e=>this.handleDragOver(e)} 
            onDragLeave={e=>this.handleDragLeave(e)} 
            onDrop={e=>this.handleDrop(e)} 
          >
            
          </div>
          <div 
            id={2} 
            className="empty"
            // className={this.state.dropClass} 
            onDragEnter={e=>this.handleDragEnter(e)} 
            onDragLeave={e=>this.handleDragLeave(e)} 
            onDragOver={e=>this.handleDragOver(e)} 
            onDrop={e=>this.handleDrop(e)} 
          ></div>
          <div 
            id={3} 
            className="empty"
            // className={this.state.dropClass} 
            onDragEnter={e=>this.handleDragEnter(e)} 
            onDragLeave={e=>this.handleDragLeave(e)} 
            onDragOver={e=>this.handleDragOver(e)} 
            onDrop={e=>this.handleDrop(e)} 
          ></div>
          <div 
            id={4} 
            className="empty"
            // className={this.state.dropClass} 
            onDragEnter={e=>this.handleDragEnter(e)} 
            onDragLeave={e=>this.handleDragLeave(e)} 
            onDragOver={e=>this.handleDragOver(e)} 
            onDrop={e=>this.handleDrop(e)} 
          ></div>
        </div>
      </div>
    );
  };
};

export default DragDiv
