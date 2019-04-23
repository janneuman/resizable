import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Resizable from '../lib/Resizable';

configure({ adapter: new Adapter() });

const handleElement = <div><span>||</span></div>;

describe('Resizable react component', () => {
  it('should render the component', ()=>{
    const wrapper = mount((<Resizable
      width={400}
      height={400}
      axis="both"
      wrapperClassName="resizableWrapper"
      verticalHandleClassName="handle-x"
      verticalHandleElement={handleElement}
      horizontalHandleClassName="handle-y"
      horizontalHandleElement={handleElement}
    />));

    expect(wrapper.find('.handle-x').exists()).toBeTruthy();
    expect(wrapper.find('.handle-y').exists()).toBeTruthy();
  });

  it('should render the component without horizontal handle', ()=>{
    const wrapper = shallow((<Resizable
      width={400}
      height={400}
      axis="y"
      wrapperClassName="resizableWrapper"
      horizontalHandleClassName="handle-y"
      horizontalHandleElement={handleElement}
    />));

    expect(wrapper.find('.handle-x').exists()).toBeFalsy();
    expect(wrapper.find('.handle-y').exists()).toBeTruthy();
  });

  it('should render the component without vertical handle', ()=>{
    const wrapper = shallow((<Resizable
      width={400}
      height={400}
      axis="x"
      wrapperClassName="resizableWrapper"
      verticalHandleClassName="handle-x"
      verticalHandleElement={handleElement}
    />));

    expect(wrapper.find('.handle-x').exists()).toBeTruthy();
    expect(wrapper.find('.handle-y').exists()).toBeFalsy();
  });

  it('should throw a warning if handle is not a react element', () => {
    const warning = jest.spyOn(console, 'warn').mockImplementation(() => {
      return '';
    });

    const wrapper = shallow((<Resizable
      width={400}
      height={400}
      axis="x"
      wrapperClassName="resizableWrapper"
    />));

    expect(warning).toBeCalled();
  });

  it('should set new state to isDragged when click event is called on handle', () => {
    const wrapper = shallow(<Resizable
      width={400}
      height={400}
      axis="both"
      wrapperClassName="resizableWrapper"
      verticalHandleClassName="handle-x"
      verticalHandleElement={handleElement}
      horizontalHandleClassName="handle-y"
      horizontalHandleElement={handleElement}
    />);

    expect(wrapper.state('isDragged')).toBe(false);
    wrapper.find('.handle-y').simulate("mousedown");
    expect(wrapper.state("isDragged")).toBe(true);
  });

  it('should set new state for width & height after mousemove event', () => {
    const wrapper = shallow(<Resizable
      width={400}
      height={400}
      axis="both"
      wrapperClassName="resizableWrapper"
      verticalHandleClassName="handle-x"
      verticalHandleElement={handleElement}
      horizontalHandleClassName="handle-y"
      horizontalHandleElement={handleElement}
    />);

    wrapper.find('.handle-y').simulate('mousedown');

    const documentElement = window.document.documentElement;
    const mouseMove = new Event('mousemove');
    Object.assign(mouseMove, { movementX: 1, movementY: 1 });
    documentElement.dispatchEvent(mouseMove);

    expect(wrapper.state('height')).toBe(401);
    expect(wrapper.state('width')).toBe(401);
  });

  it('should set new state only for height after mousemove event', () => {
    const wrapper = shallow(<Resizable
      width={400}
      height={400}
      axis="y"
      wrapperClassName="resizableWrapper"
      horizontalHandleClassName="handle-y"
      horizontalHandleElement={handleElement}
    />);

    wrapper.find('.handle-y').simulate('mousedown');

    const documentElement = window.document.documentElement;
    const mouseMove = new Event('mousemove');
    Object.assign(mouseMove, { movementX: 1, movementY: 1 });
    documentElement.dispatchEvent(mouseMove);

    expect(wrapper.state('height')).toBe(401);
    expect(wrapper.state('width')).toBe(400);
  });

  it('should set new state only for width after mousemove event', () => {
    const wrapper = shallow(<Resizable
      width={400}
      height={400}
      axis="x"
      wrapperClassName="resizableWrapper"
      verticalHandleClassName="handle-x"
      verticalHandleElement={handleElement}
    />);

    wrapper.find('.handle-x').simulate('mousedown');

    const top = window.document.documentElement;
    const mouseMove = new Event('mousemove');
    Object.assign(mouseMove, { movementX: 1, movementY: 1 });
    top.dispatchEvent(mouseMove);

    expect(wrapper.state('height')).toBe(400);
    expect(wrapper.state('width')).toBe(401);
  });

  it('should set minimal width & height', () => {
    const wrapper = shallow(<Resizable
      width={400}
      height={400}
      minHeight={400}
      minWidth={400}
      axis="both"
      wrapperClassName="resizableWrapper"
      verticalHandleClassName="handle-x"
      verticalHandleElement={handleElement}
      horizontalHandleClassName="handle-y"
      horizontalHandleElement={handleElement}
    />);

    wrapper.find('.handle-y').simulate('mousedown');

    const documentElement = window.document.documentElement;
    const mouseMove = new Event('mousemove');
    Object.assign(mouseMove, { movementX: -1, movementY: -1 });
    documentElement.dispatchEvent(mouseMove);

    expect(wrapper.state('height')).toBe(400);
    expect(wrapper.state('width')).toBe(400);
  });

});
