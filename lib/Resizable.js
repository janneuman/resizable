import React from 'react';
import PropTypes from 'prop-types';

export default class Resizable extends React.Component {
  constructor(props) {
    super(props);
    this.onStart = this.onStart.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.onMove = this.onMove.bind(this);
    this.renderHorizontalHandle = this.renderHorizontalHandle.bind(this);
    this.renderVerticalHandle = this.renderVerticalHandle.bind(this);

    this.state = {
      height: props.height,
      width: props.width,
      isDragged: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.isDragged && (
      nextProps.height !== this.props.height
      || nextProps.width !== this.props.width)) {
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

    let height = this.state.height + (canDragY ? event.movementY : 0);
    let width = this.state.width + (canDragX ? event.movementX : 0);

    if (this.state.height === height && this.state.width === width) {
      return;
    }

    if (height < this.props.minHeight) {
      height = this.props.minHeight;
    }

    if (width < this.props.minWidth) {
      width = this.props.minWidth;
    }

    this.setState(() => ({
      height,
      width,
    }));
  }

  onStart() {
    document.addEventListener('mousemove', this.onMove, true);
    document.addEventListener('mouseup', this.onEnd, true);

    this.setState({
      isDragged: true,
    });
  }

  onEnd() {
    document.removeEventListener('mousemove', this.onMove, true);
    document.removeEventListener('mouseup', this.onEnd, true);

    this.setState({
      isDragged: false,
    });
  }

  renderHorizontalHandle() {
    if (this.props.axis !== 'both' && this.props.axis !== 'x') {
      return null;
    }

    const className = `${this.props.verticalHandleClassName} resizable-x`;

    return this.renderHandle(this.props.verticalHandleElement, className);
  }

  renderVerticalHandle() {
    if (this.props.axis !== 'both' && this.props.axis !== 'y') {
      return null;
    }

    const className = `${this.props.horizontalHandleClassName} resizable-y`;

    return this.renderHandle(this.props.horizontalHandleElement, className);
  }

  renderHandle(element, className) {
    if (React.isValidElement(element)) {
      return React.cloneElement(
        element,
        {
          className,
          onMouseDown: this.onStart,
        },
      );
    }
    // eslint-disable-next-line no-console
    console.warn('Resizable handle must be an React element');
    return null;
  }


  render() {
    return (
      <div
        style={{
          position: 'relative',
          width: `${this.state.width}px`,
          height: `${this.state.height}px`,
        }}
        className={this.props.wrapperClassName}
      >
        {this.props.children}
        {this.renderHorizontalHandle()}
        {this.renderVerticalHandle()}
      </div>
    );
  }
}

Resizable.defaultProps = {
  axis: 'both',
  wrapperClassName: 'resizable-wrapper',
  verticalHandleClassName: 'resizable-handle-x',
  horizontalHandleClassName: 'resizable-handle-y',
  children: null,
  minWidth: 0,
  minHeight: 0,
  verticalHandleElement: null,
  horizontalHandleElement: null,
};

Resizable.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  minWidth: PropTypes.number,
  minHeight: PropTypes.number,
  axis: PropTypes.oneOf(['both', 'x', 'y']),
  wrapperClassName: PropTypes.string,
  verticalHandleElement: PropTypes.element,
  verticalHandleClassName: PropTypes.string,
  horizontalHandleElement: PropTypes.element,
  horizontalHandleClassName: PropTypes.string,
  children: PropTypes.element,
};
