let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawgame=()=>{
   console.log ("game was draw");
   msg.innerText="Game was draw.Play again";
       msg.style.backgroundColor="#081b31"
};

const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
        console.log("YOu win!");
        msg.innerText="You win!";
        msg.style.backgroundColor="green"
    }else{
        compScore++;
        compScorepara.innerText=compScore;
        console.log("You Lose!");
           msg.innerText="You Lose!";
             msg.style.backgroundColor="red"  
    }
}
const playgame=(userChoice)=>{
console.log("user choice=",userChoice);
//Generate computer choice
const compChoice=genCompChoice();
console.log("Comp choice=",compChoice);


if(userChoice===compChoice){
    //draw game
    drawgame();
}else{
let userWin=true;
if(userChoice==="rock"){
    //comp shld be either sci,paper
    userWin=compChoice==="paper"?false:true;
}else if(userChoice==="paper"){
    //comp sci,rock
    userWin=compChoice==="scissor"?false:true;
}else{
    //rock paper
    userWin=compChoice==="rock"?false:true;
}
showWinner(userWin);
}
};

choices.forEach((choice) => {
  
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        playgame(userChoice);
    });
    
});