// Nav bar 

const navContent = () => {
    // div containing buttons
    // wrapper
    const div = newDiv();
    div.classList.add('navBar');
    
    // buttons
    const homeButton = newButton('homeButton', 'navButton');
    homeButton.textContent = 'Home';
    const menuButton = newButton('menuButton', 'navButton');
    menuButton.textContent = 'Menu';
    const contactButton = newButton('contactButton', 'navButton');
    contactButton.textContent = 'Contact';
    
    div.append(homeButton,menuButton,contactButton);
    
    return div;
}

export default navContent

function newDiv() {
    const element = document.createElement('div');
    return element;
}
function newButton(idname, classname ) {
    const element = document.createElement('button');
    element.classList.add(`${classname}`);
    element.setAttribute('id',`${idname}`);
    return element;
}