let cards = document.querySelectorAll(".card");
let container = document.querySelector("#container");
let posts = document.querySelector("#posts");
let thumbNails = document.querySelector("#content");

let backBTN = document.querySelector("#backBTN");

let dominion = document.querySelector("#Dominion");
let hike = document.querySelector("#Hike");
let ultimate = document.querySelector("#Ult");
let climb = document.querySelector("#Rock")
let phineas = document.querySelector("#Phin");
let lords = document.querySelector("#Lords");


let dominionPost = document.querySelector("#domiPost");
let hikePost = document.querySelector("#hikePost");
let ultimatePost = document.querySelector("#ultimatePost");
let climbPost = document.querySelector("#climbPost");
let phineasPost = document.querySelector("#phineasPost");
let lordsPost = document.querySelector("#lordPost")


dominion.addEventListener('click', function(){
    posts.classList.remove("Hide");
    blogClicked(dominionPost);
})

hike.addEventListener('click', function(){
    posts.classList.remove("Hide");
    blogClicked(hikePost);
})

ultimate.addEventListener('click', function(){
    posts.classList.remove("Hide");
    blogClicked(ultimatePost);
})

climb.addEventListener('click', function(){
    posts.classList.remove("Hide");
    blogClicked(climbPost);
})

phineas.addEventListener('click', function(){
    posts.classList.remove("Hide");
    blogClicked(phineasPost);
})

lords.addEventListener('click', function(){
    posts.classList.remove("Hide");
    blogClicked(lordsPost);
})


function blogClicked(selected){
    thumbNails.classList.add("Hide");
    selected.classList.remove("Hide");
    container.classList.add("Hide");
}

backBTN.addEventListener('click', function(){
    container.classList.remove("Hide");
    posts.classList.add("Hide");
    thumbNails.classList.remove("Hide");

    dominionPost.classList.add("Hide");
    hikePost.classList.add("Hide");
    console.log("Hike hidden");
    ultimatePost.classList.add("Hide");
    climbPost.classList.add("Hide");
    phineasPost.classList.add("Hide");
    lordsPost.classList.add("Hide");
    
})

