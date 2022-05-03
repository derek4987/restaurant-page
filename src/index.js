import _ from 'lodash';
import './style.css';
import navContent from './nav';
import homeContent from './home';
import contactContent from './contact';
import menuContent from './menu';

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

// menu tab content
function menuPage() {
  const element = menuContent();

  return element;
}


document.addEventListener('click', function(e) {

  if (e.target.matches('#homeButton')) {
    pageContent.innerHTML = '';
    pageContent.append(navBar,homePage());
  }

  if (e.target.matches('#menuButton')) {
    pageContent.innerHTML = '';
    pageContent.append(navBar,menuPage());
  }

  if (e.target.matches('#contactButton')) {
    pageContent.innerHTML = '';
    pageContent.append(navBar,contactPage());
  }

})