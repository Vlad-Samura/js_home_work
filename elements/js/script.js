'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'green';
// box.style.width = '500px';

box.style.cssText = 'background-color : green; width : 500px';

btns[1].style.backgroundColor = "red";

circles[0].style.backgroundColor = 'black';

for (let i = 0; i < circles.length; i++){
    circles[i].style.backgroundColor = "red";
};

hearts.forEach(item => {
    item.style.backgroundColor = "blue";
});




const div = document.createElement('div');
//const text = document.createTextNode('Тут был я');

div.classList.add('black');

document.body.append(div);

div.innerHTML = "<h1>Hello!</h1>";

div.insertAdjacentHTML('', '<h2>Hella</h2>');

//div.textContent = "Hi";

//wrapper.append(div);
// wrapper.prepend(div);
//hearts[1].before(div);
// hearts[1].after(div);

// circles[0].remove();

// hearts[0].replaceWith(circles[1]);