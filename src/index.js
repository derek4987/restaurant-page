import _ from 'lodash';
import './style.css';
import Test from './test.png';

function component() {
    const element = document.createElement('div');
  
    // Lodash, new imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // add image to our existing div.
    const test = new Image();
    test.src = Test;

    element.appendChild(test);
  
    return element;
  }
  
  document.body.appendChild(component());