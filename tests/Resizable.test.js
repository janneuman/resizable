import React from 'react';
import { mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Resizable from '../lib/Resizable';

configure({ adapter: new Adapter() });

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

const verticalHandleElement = <div className="vertical" style={verticalHandleStyles}>
  <span style={verticalHandleCenterStyles}>||</span>
</div>;

const horizontalHandleElement = <div style={horizontalHandleStyles}>
  <span style={horizontalHandleCenterStyles}>||</span>
</div>;

describe('Resizable react component', () => {
  it('should render the component', ()=>{
    const component = mount((<Resizable
      width={400}
      height={400}
      axis="both"
      wrapperClassName="resizableWrapper"
      verticalHandleClassName="handle-x"
      verticalHandleElement={verticalHandleElement}
      horizontalHandleClassName="handle-y"
      horizontalHandleElement={horizontalHandleElement}
      key={1}
    />));

  });
});
