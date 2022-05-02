// contact tab content

import Logo from './asssets/img/Logo.png';

const contactContent = () => {
    // home content wrapper
    const tabContent = newDiv('','c-tabContent');

    // text wrapper
    const txtWrapper = newDiv('c-txtWrapper','');

    // restaurant home page text
    const description = newDiv('c-description','');
    description.setAttribute('style', 'white-space: pre;');
    description.textContent = "90 Albert St, Brunswick East \r\n";
    description.textContent += "Monday - Sunday 7:30 - 3 \r\n";
    description.textContent += "(04) 6696 9071";
    
    // work with us text
    const workWithUs = newDiv('c-workWithUs','');
    workWithUs.setAttribute('style', 'white-space: pre;');
    workWithUs.textContent = "Want to work with us? Email \r\n";
    workWithUs.textContent += "work@wlbakeryemail.com"

    // txtWrapper add children
    txtWrapper.append(description,workWithUs);

    // img logo
    const img = new Image();
    img.src = Logo;

    // const imgLogo = document.createElement('img');
    img.setAttribute('id','c-logo');
    // imgLogo.setAttribute('src',`${img}`);

    // add children
    tabContent.append(txtWrapper, img);

    return tabContent;
}

export default contactContent;


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