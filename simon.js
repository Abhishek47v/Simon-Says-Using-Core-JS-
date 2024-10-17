let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red","purple","green"];

let start = false;
let level = 0;
let highestLevel = 0;
let desc = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(start == false){
        start = true;
        levelUp();
    }
});

function levelUp(){
    userSeq = [];
    level++;
    desc.innerText = `Level ${level}`;
    let index = Math.floor(Math.random()*4);
    let mainBtn = document.querySelector(`.${btns[index]}`);
    gameSeq.push(btns[index]);
    gameFlash(mainBtn);
}

function gameFlash(btn){
    btn.classList.add("gameFlash");
    setTimeout(function() {
        btn.classList.remove("gameFlash");
    },350);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    },350);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function btnPress(){
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    matchColors(userSeq.length-1);
}

function matchColors(i){
    if(userSeq[i] == gameSeq[i]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    } else {
        highestLevel = Math.max(highestLevel, level);
        desc.innerHTML = `Game Over ! Your Score was <b>${level}</b><br> Highest Score is ${highestLevel} <br>Press any key to Start`;
        redFlash();
        reset();
        // highestLevel();
    }
}

function reset(){
    start = false;
    level = 0;
    gameSeq=[];
    userSeq=[];
}

function redFlash(){
    let body = document.querySelector("body");
    body.classList.add("redFlash");
    setTimeout(function(){
        body.classList.remove("redFlash");
    }, 200);
}