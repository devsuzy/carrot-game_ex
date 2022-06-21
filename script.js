'use strict';

// 상수를 정의하는 변수는 대부분 대문자로 정의해서 쓴다.
const CARROT_SIZE = 80; 
const CARROT_COUNT = 5;
const BUG_COUNT = 5;

// 1
const ground = document.querySelector(".ground");
const groundRect = ground.getBoundingClientRect();

// 2
const gameStart = document.querySelector(".play");
const gameTimer = document.querySelector(".timer")
const gameScore = document.querySelector(".score");

// 게임 시작 전 초기화 상태
let started = false; // 페이지가 로딩 되었을 때 바로 시작하지 않으므로 초기 값은 false
let score = 0;
let timer = undefined;

// 2. Game Start

gameStart.addEventListener('click', event => {
    // start 버튼을 눌렀을 때, 게임이 시작 되었다면 게임을 중단하고 게임이 시작하지 않았다면 게임을 시작한다.
    if(started){
        stopGame()
    } else{
        startGame()
    }
    started = !started;
})

function startGame(){
    initGame(); // 게임 실행
    showStopButton(); // 시작 버튼 중지 버튼으로 바꾸기
    showTimerAndScore(); // 숨겨져 있던 타이머와 스코어 보여주기
    startGameTimer(); // 타이머 카운트 시작하기
}
function stopGame(){
    // Replay 팝업 보여주기
}
function showStopButton(){
    const icon = gameStart.querySelector('.fa-play');
    icon.classList.add('fa-stop');
    icon.classList.remove('fa-play');
}
function showTimerAndScore(){
    gameTimer.style.visibility = 'visible'
    gameScore.style.visibility = 'visible'
}


// 1. carrots, bugs random arragement

function initGame(){
    ground.innerHTML = '';
    // 리셋
    gameScore.innerHTML = CARROT_COUNT;
    // 당근 갯수 카운터에 나타내기
    console.log(groundRect);
    addItem('carrot', CARROT_COUNT, 'img/carrot.png')
    addItem('bug', BUG_COUNT, 'img/bug.png')
    // 벌레와 당근 생성 
}

function addItem(className, count, imgPath){
    const x1 = 0;
    const y1 = 0;
    const x2 = groundRect.width - CARROT_SIZE;
    const y2 = groundRect.height - CARROT_SIZE;

    for (let i = 0; i < count; i++){
        const item = document.createElement('img')
        item.setAttribute('class', className)
        item.setAttribute('src', imgPath)
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


