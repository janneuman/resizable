import React from 'react';

export default class Resizable extends React.Component {
  //TODO: default props
  constructor (props) {
    super(props);
    this.onStart = this.onStart.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.onMove = this.onMove.bind(this);

    this.state = {
      height: this.props.height,
      width: this.props.width,
      axis: this.props.axis,
      isDragged: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.isDragged && (
      nextProps.height !== this.props.height ||
      nextProps.width !== this.props.width)) {
        this.setState({
          height: nextProps.height,
          width: nextProps.width,
        });
    }
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.onMove, true);
    document.removeEventListener('mouseup', this.onEnd, true);
  }

  onMove(event) {
    if (!this.state.isDragged || this.props.axis === 'none') {
      return;
    }

    const canDragY = this.props.axis === 'both' || this.props.axis === 'y';
    const canDragX = this.props.axis === 'both' || this.props.axis === 'x';

    const height = this.state.height + (canDragY ? event.movementY : 0);
    const width = this.state.width + (canDragX ? event.movementX : 0);

    if (this.state.height === height && this.state.width === width) {
      return;
    }

    this.setState({
      height,
      width,
    });
  }

  onStart() {
    document.addEventListener('mousemove', this.onMove, true);
    document.addEventListener('mouseup', this.onEnd, true);

    this.setState({
      isDragged: true,
    })
  }

  onEnd() {
    document.removeEventListener('mousemove', this.onMove, true);
    document.removeEventListener('mouseup', this.onEnd, true);

    this.setState({
      isDragged: false,
    });
  }

  renderHorizontalHandle() {
    //TODO: remove styles
    if (this.props.axis !== 'both' && this.props.axis !== 'y') {
      return null;
    }

    const className = `${this.props.horizontalHandleClassName} resizable-handle-y`;

    return <div
      className={className}
      style={{
        position: 'absolute',
        bottom: '0',
        right: '0',
        left: '0',
        height: '10px',
        width: '100%',
        background: 'red',
        borderTop: '1px solid white',
        borderBottom: '1px solid white',
        cursor: 'row-resize',
        boxSizing: 'border-box',
      }}
      onMouseDown={this.onStart}
    />
  }

  renderVerticalHandle() {
    //TODO: remove styles
    if (this.props.axis !== 'both' && this.props.axis !== 'x') {
      return null;
    }

    const className = `${this.props.verticalHandlerClassName} resizable-handle-x`;

    return <div
      className={className}
      style={{
        position: 'absolute',
        top: '0',
        bottom: '0',
        right: '0',
        height: '100%',
        width: '10px',
        background: 'red',
        borderLeft: '1px solid white',
        borderRight: '1px solid white',
        cursor: 'col-resize',
        boxSizing: 'border-box',
      }}
      onMouseDown={this.onStart}
    />
}


  render() {
    //TODO: default styles
    return (
      <div
        style={{
          position: 'relative',
          background: 'lightBlue',
          width: `${this.state.width}px`,
          height: `${this.state.height}px`,
        }}
      >
        <div>{this.props.children}</div>
        {this.renderHorizontalHandle()}
        {this.renderVerticalHandle()}
      </div>
    );
  }
}
