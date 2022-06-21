'use strict'

// 1. carrots, bugs random arragement

const CARROT_SIZE = 80
const ground = document.querySelector(".ground");
const groundRect = ground.getBoundingClientRect();
console.log(groundRect)

function initGame(){
    addItem('carrot', 5, 'img/carrot.png');
    addItem('bug', 5, 'img/bug.png');
}

function addItem(ClassName, count, imgPath){
    const x1 = 0;
    const y1 = 0;
    const x2 = groundRect.width - CARROT_SIZE;
    const y2 = groundRect.height - CARROT_SIZE;

    for(let i = 0; i < count; i++){
        const item = document.createElement('img');
        item.setAttribute('class', ClassName);
        item.setAttribute('src', imgPath);
        item.style.position = 'absolute';
        const x = randomNumber(x1, x2);
        const y = randomNumber(y1, y2);
        item.style.left = `${x}px`
        item.style.top = `${y}px`
        ground.appendChild(item)
    }
}

function randomNumber(min, max){
    return Math.random() * (max - min) + min;
}

initGame()
