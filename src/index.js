import _ from 'lodash';
import './style.css';
import navContent from './nav';
import homeContent from './home';

// navbar
const navBar = navContent();

function homePage() {
  const element = homeContent();
  
  return element;
}

const pageContent = document.querySelector('#content');
pageContent.append(navBar,homePage());




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