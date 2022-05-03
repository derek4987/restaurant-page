// menu tab content

import Logo from './asssets/img/Logo.png'

const menuContent = () => {
    // menu content wrapper
    const tabContent = newDiv('m-border');

    // img logo
    const img = new Image();
    img.src = Logo;
    img.setAttribute('class','m-logo');

    // menu div wrapper
    const menuDiv = newDiv('menu-div');

    // menu 1 and 2
    const menu1 = newDiv('m-menu1');
    const menu2 = newDiv('m-menu2');

    // menu1 sections 
    const m1Section1 = newDiv('m-section');
    const m1s1i1 = menuItem('Chocolate nut granola, coconut yoghurt ans seasonal jam (V)', '$14');
    const m1s1i2 = menuItem('Fruit toast and cultured butter (VO)', '$9');
    m1Section1.append(m1s1i1,m1s1i2);

    const m1Section2 = newDiv('m-section');
    const m1s2Heading = newHeading('Sandwiches, available in sourdough or baguette (from 9 am)');
    const m1s2i1 = menuItem('Gochujang braised tofu with sriracha mayo, cabbage slaw, candied spiced peanuts, and a carrot & daikon pickle (V)(or as a salad)', '$16');
    const m1s2i2 = menuItem('Giardiniera salad, lemony vegan ricotta and lettuce (V)','$14');
    const m1s2i3 = menuItem('Roast chicken baguette, egg-free chipotle mayo, pickled cucumber and lettuce','$17');
    const m1s2i4 = menuItem('Toasted cheese sandwich with a blend of cheddar, Comté gruyere and Asiago','$12');
    const m1s2i5 = menuItem('Spring greens salad of broccolini, watermelon radish, peas, cucumber and a lemon maple vinaigrette. Topped with a crispy sprinkle of soy toasted puffed rice, almonds, and sunflower seeds (V, GF)','$15');
    const m1s2i6 = menuItem('+ A piece of sourdough and butter (VO)','$3');
    m1Section2.append(m1s2Heading,m1s2i1,m1s2i2,m1s2i3,m1s2i4,m1s2i5,m1s2i6);

    const m1Section3 = newDiv('m-section');
    const m1s3Heading = newHeading('Pies available from 9am, with tomato relish');
    const m1s3i1 = menuItem('Beef and mushroom','$12');
    const m1s3i2 = menuItem('Lentil, potato and halloumi','$12');
    const m1s3i3 = menuItem('Pork and fennel sausage roll','$10');
    const m1s3i4 = menuItem('+ A little side salad of dressed cabbage, carrot and daikon','$3');
    const m1s3i5 = menuItem('Pizza by the slice, see cabinet for toppings (from 10am)','$10-12');
    m1Section3.append(m1s3Heading,m1s3i1,m1s3i2,m1s3i3,m1s3i4,m1s3i5);


    //menu2 sections
    const m2Section1 = newDiv('m-section');
    const m2s1Heading = newHeading('Coffee');
    const m2s1i1 = menuItem('Market Lane Coffee Seasonal Espresso:','');
    const m2s1i2 = menuItem('→ Espresso / Long Black / Piccolo / Macchiato','$4.00');
    const m2s1i3 = menuItem('→ Flat White / Cappuccino / Caffe Latte','$4.50');
    const m2s1i4 = menuItem('+ Soy / Oat','$0.30');
    const m2s1i5 = menuItem('+ Ice','$0.20');
    const m2s1i6 = menuItem('Pour-overfilter coffee:','');
    const m2s1i7 = menuItem('→ Adado - Ethiopia - Stella Coffee','$5.00');
    const m2s1i8 = menuItem('→ Kiambu - Kenya - Friends Coffee','$5.00');
    const m2s1i9 = menuItem('+ Ice','$0.20');
    m2Section1.append(m2s1Heading,m2s1i1,m2s1i2,m2s1i3,m2s1i4,m2s1i5,m2s1i6,m2s1i7,m2s1i8,m2s1i9);

    const m2Section2 = newDiv('m-section');
    const m2s2Heading = newHeading('Cold drinks');
    const m2s2i1 = menuItem('Sunzest Organic orange juice','$4.50');
    const m2s2i2 = menuItem('Beechworth Apple Juice ','$4,50');
    const m2s2i3 = menuItem('Sparkling Water:','');
    const m2s2i4 = menuItem('→ Glass','$1.00');
    const m2s2i5 = menuItem('→ Unlimited bottle','$5.00');
    const m2s2i6 = menuItem('Apple or Pear Sparkling Juice','$5.00');
    const m2s2i7 = menuItem('Herbs of Life Lemon Myrtle Kombucha','$5.00');
    const m2s2i8 = menuItem('TINA Drinks sparkling oolong','$7.00');
    m2Section2.append(m2s2Heading,m2s2i1,m2s2i2,m2s2i3,m2s2i4,m2s2i5,m2s2i6,m2s2i7,m2s2i8);

    // append menu1 and menu2 children
    menu1.append(m1Section1, m1Section2, m1Section3);
    menu2.append(m2Section1,m2Section2);

    // append menuDiv children
    menuDiv.append(menu1,menu2);

    tabContent.append(img, menuDiv);

    return tabContent;
}

export default menuContent;


function newDiv(classname) {
    const element = document.createElement('div');
    if (classname !== '') {
        element.classList.add(`${classname}`);    
    }

    return element;
}

function menuItem(name, price) {
    const mItem = newDiv('m-item');
    const titleDiv = newDiv('m-title');
    const priceDiv = newDiv('m-price');

    titleDiv.textContent = name;
    priceDiv.textContent = price;

    mItem.append(titleDiv, priceDiv);

    return mItem;
}

function newHeading(heading) {
    const newHeading = newDiv('m-heading');
    newHeading.textContent = heading;

    return newHeading;
}