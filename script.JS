//buttons
let Rock=document.querySelector("#rockbtn");
let Paper=document.querySelector("#paperbtn");
let Scissors=document.querySelector("#scissorsbtn");
let Reset=document.querySelector("#reset");

//choices
let Player=document.querySelector(".icon");
let Computer=document.querySelector(".icon1");


//result area
let Results=document.querySelector(".results");
let Selections=["ROCK","PAPER","SCISSORS"];

//Rock
Rock.addEventListener("click",()=>{
    let Ranum=Math.floor(Math.random()*3);
    Computer.innerHTML=Selections[Ranum];
    Player.innerHTML="ROCK";

    if (Computer.innerHTML==Player.innerHTML) {
        Results.innerHTML="DRAW!";
        }
    
    if(Computer.innerHTML=="SCISSORS"){
       Results.innerHTML="YOU WON!";
       }

    if(Computer.innerHTML=="PAPER"){
        Results.innerHTML="YOU LOSE!";   
        }
    }) 

//paper
Paper.addEventListener("click",()=>{
    let Ranum=Math.floor(Math.random()*3);
    Computer.innerHTML=Selections[Ranum];
    Player.innerHTML="PAPER";

    if (Computer.innerHTML==Player.innerHTML) {
        Results.innerHTML="DRAW!";
        }
    
    if(Computer.innerHTML=="ROCK"){
       Results.innerHTML="YOU WON!";
       }

    if(Computer.innerHTML=="SCISSORS"){
        Results.innerHTML="YOU LOSE!";   
        }
})

//scissors
Scissors.addEventListener("click",()=>{
    let Ranum=Math.floor(Math.random()*3);
    Computer.innerHTML=Selections[Ranum];
    Player.innerHTML="SCISSORS";

    if (Computer.innerHTML==Player.innerHTML) {
         Results.innerHTML="DRAW!";
        }
    
    if(Computer.innerHTML=="PAPER"){
       Results.innerHTML="YOU WON!";
       }

    if(Computer.innerHTML=="ROCK"){
       Results.innerHTML="YOU LOSE!";   
     }
})
//reset
Reset.addEventListener("click",()=>{
    Computer.innerHTML="";
    Player.innerHTML="";
    Results.innerHTML="";
})