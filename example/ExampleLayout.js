import React from 'react';
import Resizable from '../lib/Resizable';

const shareHandleStyles = {
  position: 'absolute',
  background: 'lightBlue',
}

const shareHandleCenterStyles = {
  position: 'absolute',
  width: '8px',
  height: '16px',
  top: '50%',
  left: '50%',
}

const verticalHandleStyles = {
  ...shareHandleStyles,
  top: '0',
  bottom: '0',
  right: '0',
  height: '100%',
  width: '10px',
  cursor: 'col-resize',
};

const verticalHandleCenterStyles = {
  ...shareHandleCenterStyles,
  marginLeft: '-4px',
  marginTop: '-8px',
}

const horizontalHandleStyles = {
  ...shareHandleStyles,
  bottom: '0',
  right: '0',
  left: '0',
  height: '10px',
  width: '100%',
  cursor: 'row-resize',
};

const horizontalHandleCenterStyles = {
  ...shareHandleCenterStyles,
  marginTop: '-8px',
  marginLeft: '-4px',
  transform: 'rotate(90deg)',
}

const verticalHandleElement = <div style={verticalHandleStyles}>
  <span style={verticalHandleCenterStyles}>||</span>
</div>;

const horizontalHandleElement = <div style={horizontalHandleStyles}>
  <span style={horizontalHandleCenterStyles}>||</span>
</div>;

export default class ExampleLayout extends React.Component {
  render() {
    return (
      <div>
        <Resizable
          width={400}
          height={400}
          axis="both"
          wrapperClassName="resizableWrapper"
          verticalHandleClassName="handle-x"
          verticalHandleElement={verticalHandleElement}
          horizontalHandleClassName="handle-y"
          horizontalHandleElement={horizontalHandleElement}
          key={1}
        >
          <ul>
            <li>Publishing and graphic design, lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation, such as web pages, typography, and graphical layout. It is a form of "greeking".</li>
          </ul>
        </Resizable>
        <Resizable
          verticalHandleElement={verticalHandleElement}
          horizontalHandleElement={horizontalHandleElement}
          key={2}
        >
          <span>asldjalhd</span>
        </Resizable>
      </div>
    );
  }
}
