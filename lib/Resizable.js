import React from 'react';

export default class Resizable extends React.Component {
  constructor (props) {
    super(props);
    this.onStart = this.onStart.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.onMove = this.onMove.bind(this);
    // this.forceEnd = this.forceEnd.bind(this);

    this.state = {
      width: '200px',
      height: '100px',
      isDragged: false,
    }
  }

  componentDidMount() {

  }

  onStart(event) {
    this.setState({
      isDragged: true,
    })
  }

  onEnd(event) {
    this.setState({
      isDragged: false,
      height: `${event.clientY}px`,
      width: `${event.clientX}px`,
    });
  }
  // Not sure if this is good idea
  // forceEnd() {
  //   this.setState({
  //     isDragged: false,
  //   })
  // }

  onMove(event) {
    if (this.state.isDragged) {
      this.setState({
        height: `${event.clientY}px`,
        width: `${event.clientX}px`,
      });
    }
  }


  render() {
    return (
      <div
        style={{
          position: 'relative',
          background: 'lightBlue',
          width: this.state.width,
          height: this.state.height,
        }}
        onMouseMove={this.onMove}
        // onMouseOut={this.forceEnd}
      >
        <div>{this.props.children}</div>
        <div
          style={{
            position: 'absolute',
            top: '0',
            right: '0',
            height: '100%',
            width: '5px',
            background: 'red',
            borderLeft: '1px solid white',
            borderRight: '1px solid white',
            cursor: 'col-resize',
          }}
          onMouseDown={this.onStart}
          onMouseUp={this.onEnd}
        />
      </div>
    );
  }
}
