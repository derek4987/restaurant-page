import _ from 'lodash';
// import Test from './test.png';
import './style.css';
import myName from './home';
import img from './home';

import Test from './asssets/img/test.png';

const testimg = new Image();
testimg.src = Test;

function component() {
  const element = document.createElement('div');
  
  return element;
}

document.body.appendChild(component());




// function component() {
//     const element = document.createElement('div');
  
//     // Lodash, new imported by this script
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     element.classList.add('hello');

//     // add image to our existing div.
//     const test = new Image();
//     test.src = Test;

//     element.appendChild(test);
  
//     return element;
//   }
  
//   document.body.appendChild(component());