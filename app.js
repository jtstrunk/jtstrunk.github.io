let cards = 10;
let score = 0;
let estate = 3;
let duchy = 0;
let province = 0;


let cMinus = document.querySelector("#cMinus");
let cPlus = document.querySelector("#cPlus");
let startcardsAmount = document.querySelector("#cardAmount");

let p1Score = document.querySelector("#score");

cMinus.addEventListener('click', function(){
    cards = cards - 1;
    startcardsAmount.textContent = cards;
})

cPlus.addEventListener('click', function(){
    cards = cards + 1;
    startcardsAmount.textContent = cards;
})

let eMinus = document.querySelector("#eMinus");
let ePlus = document.querySelector("#ePlus");
let startEstatesAmount = document.querySelector("#estateAmount");

eMinus.addEventListener('click', function(){
    estate = estate - 1;
    startEstatesAmount.textContent = estate;
    calcScore()
})

ePlus.addEventListener('click', function(){
    estate = estate + 1;
    startEstatesAmount.textContent = estate;
    calcScore()
})

let dMinus = document.querySelector("#dMinus");
let dPlus = document.querySelector("#dPlus");
let startDuchyAmount = document.querySelector("#duchyAmount");

dMinus.addEventListener('click', function(){
    duchy = duchy - 1;
    startDuchyAmount.textContent = duchy;
    calcScore()
})

dPlus.addEventListener('click', function(){
    duchy = duchy + 1;
    startDuchyAmount.textContent = duchy;
    calcScore()
})

let pMinus = document.querySelector("#pMinus");
let pPlus = document.querySelector("#pPlus");
let startProvinceAmount = document.querySelector("#provinceAmount");

pMinus.addEventListener('click', function(){
    province = province - 1;
    startProvinceAmount.textContent = province;
    calcScore()
})

pPlus.addEventListener('click', function(){
    province = province + 1;
    startProvinceAmount.textContent = province;
    calcScore()
})

function calcScore(){
    score = (estate * 1) + (duchy * 3) + (province * 6);
    p1Score.textContent = score;
}