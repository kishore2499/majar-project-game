let userScore =0;
let pcScore = 0;
const btnRules = document.querySelector(".rules-btn");
const btnClose = document.querySelector(".close-btn");
const modalRules = document.querySelector(".modal");
const choiceButtons = document.querySelectorAll(".choice-btn");
const choices =document.querySelectorAll(".choice");


const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()* 3);
    return options[randIdx];
;
}

const drawGame = () =>{

}

const playGame = (userChoice) => {
    console.log("your choice= ", userChoice);

    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice =  ", compChoice);

    if(userChoice === compChoice) {

        drawGame();
    }else {
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userWin = compChoice ==="paper" ? false : true;
        } else if(userChoice ==="paper"){
            //rock,scissors 
            userWin = compChoice ==="scissors" ? false: true;

        }else{ 
            //rock,paper
            userWin = compChoice ==="rock" ? false :true;
        }
     }    

    
};

choices.forEach((choice) => {
    choice.addEventListener("click",()=> {
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);

    });

});


  
  
  function homepage() {
    window.location.href = 'index.html';
    }
  
  function nextButton() {
    window.location.href = 'final.html';
  }
  
  document.querySelector('.next-btn').addEventListener('click', function() {
    nextButton();
  })
  
  document.querySelector('.play-again').addEventListener('click', function() {
    homepage();
  });
  
  
  
  btnRules.addEventListener("click", () => {
    modalRules.classList.toggle("show-modal");
  });
  
  btnClose.addEventListener("click", () => {
    modalRules.classList.toggle("show-modal");
  });

  updateScoreDisplay();
  
  setTimeout(() => {
    document.body.classList.remove("first");
  }, 500);
  
  
  
  function positionButtonsForWin() {
    nextBtn.style.position = "absolute";
    nextBtn.style.bottom = "1.5rem";
    nextBtn.style.right = "2rem";
    btnRules.style.position = "absolute";
    btnRules.style.bottom = "1.5rem";
    btnRules.style.right = "9rem";
  }