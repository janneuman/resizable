import React from 'react';
import Resizable from '../lib/Resizable';

const handleElement = <div><span>||</span></div>;

const ExampleLayout = () => (
  <div>
    <Resizable
      width={400}
      height={400}
      minWidth={200}
      minHeight={200}
      axis="both"
      wrapperClassName="resizableWrapper"
      verticalHandleClassName="handle-x"
      verticalHandleElement={handleElement}
      horizontalHandleClassName="handle-y"
      horizontalHandleElement={handleElement}
      key={1}
    >
      <ul className="menu">
        <li>Menu item 1</li>
        <li>Menu item 2</li>
        <li>Menu item 3</li>
        <li>Menu item 4</li>
        <li>Menu item 5</li>
      </ul>
    </Resizable>
    <Resizable
      width={400}
      height={400}
      axis="x"
      wrapperClassName="resizableWrapper-2"
      verticalHandleClassName="handle-x"
      verticalHandleElement={handleElement}
      key={2}
    >
      <ul className="menu">
        <li>Menu item 1</li>
        <li>Menu item 2</li>
        <li>Menu item 3</li>
        <li>Menu item 4</li>
        <li>Menu item 5</li>
      </ul>
    </Resizable>
    <Resizable
      width={400}
      height={100}
      axis="y"
      wrapperClassName="resizableWrapper-3"
      horizontalHandleClassName="handle-y"
      horizontalHandleElement={handleElement}
      key={3}
    >
      <ul className="menu">
        <li>Menu item 1</li>
        <li>Menu item 2</li>
        <li>Menu item 3</li>
        <li>Menu item 4</li>
        <li>Menu item 5</li>
      </ul>
    </Resizable>
  </div>
);

export default ExampleLayout;
