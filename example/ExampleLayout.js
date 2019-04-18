import React from 'react';
import Resizable from '../lib/Resizable';

export default class ExampleLayout extends React.Component {
  render() {
    return (
      <div>
        <Resizable>
          <div>child</div>
          {/*<ul>*/}
            {/*<li>n publishing and graphic design, lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation, such as web pages, typography, and graphical layout. It is a form of "greeking".</li>*/}
          {/*</ul>*/}
        </Resizable>
      </div>
    );
  }
}
