let userscore=0;
let compscore=0;

const choices=document.querySelectorAll('.choice');

const msg=document.querySelector('#msg');

const userScorePara=document.querySelector('#user-score');
const compScorePara=document.querySelector('#computer-score');

const genCompChoice=()=>{
    const options=['rock','paper','scissors'];
    //rock->0, paper->1, scissors->2
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};


//draw game
const drawGame=()=>{
     msg.innerText="Game was draw!";
     msg.style.backgroundColor="yellow";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userscore++;
        userScorePara.innerText=userscore;
        msg.innerText=`You won! Your ${userChoice} beats Computer's ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compScorePara.innerText=compscore;
        msg.innerText=`Computer won! Computer's ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};


const playGame=(userChoice)=>{
    console.log("user choice",userChoice);
    //generate computer choice->modular function
    const compChoice=genCompChoice();
    console.log("computer choice:",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }  
    else{
        let userWin=true;
        if(userChoice==="rock" ){
        //scissor,paper
        userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            //rock,scissors
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            //rock,paper
            userWin=compChoice==="rock"?false:true;
        } 
        showWinner(userWin,userChoice,compChoice);
    }
};


choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});