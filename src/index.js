import _ from 'lodash';
import './style.css';
import navContent from './nav';
import homeContent from './home';
import contactContent from './contact';

// navbar - default on initial open
const navBar = navContent();

// open initial page starting at homepage
const pageContent = document.querySelector('#content');
pageContent.append(navBar,homePage());

// home tab content - default on initial open
function homePage() {
  const element = homeContent();
  
  return element;
}

// contact tab content
function contactPage() {
  const element = contactContent();

  return element;
}


document.addEventListener('click', function(e) {

  if (e.target.matches('#homeButton')) {
    pageContent.innerHTML = '';
    pageContent.append(navBar,homePage());
  }

  if (e.target.matches('#menuButton')) {

  }

  if (e.target.matches('#contactButton')) {
    pageContent.innerHTML = '';
    pageContent.append(navBar,contactPage());
  }

})


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