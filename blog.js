let cards = document.querySelectorAll(".card");
let container = document.querySelector("#container");

let hike = document.querySelector("#Hike");
let phin = document.querySelector("#Phin");
let ult = document.querySelector("#Ult");

let ultimatePost = document.querySelector("#ultimatePost");
let phinPost = document.querySelector("#phinPost");
let hikePost = document.querySelector("#hikePost");


hike.addEventListener('click', function(){
    blogClicked(hikePost);
})

phin.addEventListener('click', function(){
    blogClicked(phinPost);
})

ult.addEventListener('click', function(){
    blogClicked(ultimatePost);
})

function blogClicked(selected){
    cards.forEach((element) => element.classList.add("Hide"));
    selected.classList.remove("Hide");
    container.classList.add("Hide");
}