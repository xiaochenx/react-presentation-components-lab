import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const superHappy = (e) => {
  alert('surprise!')
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={superHappy} />
  </div>,
  document.getElementById('root')
);