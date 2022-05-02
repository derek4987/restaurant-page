// home tab content

import Logo from './asssets/img/Logo.png'

const homeContent = () => {
    // home content wrapper
    const tabContent = newDiv('','h-tabContent');

    // restaurant home page text
    const description = newDiv('h-description','');
    description.textContent = "A Brunswick based bakery and cafe that loves sourdough, seasonal produce and community. Drop in for a coffee or stay for a long lunch. You're welcome to come as you are."

    // img logo
    const img = new Image();
    img.src = Logo;

    // const imgLogo = document.createElement('img');
    img.setAttribute('id','logo');
    // imgLogo.setAttribute('src',`${img}`);

    // add children
    tabContent.append(description, img);

    return tabContent;
}

export default homeContent


function newDiv(classname, idname) {
    const element = document.createElement('div');
    if (classname !== '') {
        element.classList.add(`${classname}`);    
    }
    if (idname !== '') {
        element.setAttribute('id',`${idname}`);    
    }
    return element;
}