const actions_btns = document.querySelectorAll(".actions-btn");
const log_btn = document.querySelector(".log-btn");
const reset_btn = document.querySelector(".reset-btn");
const GAME_CHOISE = ["rock", "paper", "scissors"];
let GAME_LOG = [];
let USER_CHOISE = null;
let COMPUTER_CHOISE = null;
let USER_GAME_WIN = 0;
let COMPUTER_GAME_WIN = 0;

const RandomNumber = (number) => Math.floor(Math.random() * number);

const computerChoice = () => GAME_CHOISE[RandomNumber(GAME_CHOISE.length)];

const selectWinner = (userOne, userTwo) => {
  if (userOne === userTwo) return "Draw";

  switch (userOne) {
    case "rock":
      return userTwo === "paper" ? "computer" : "user";

    case "paper":
      return userTwo === "scissors" ? "computer" : "user";

    case "scissors":
      return userTwo === "rock" ? "computer" : "user";
  }
};

const resetGame = () => {
  document.body.style.backgroundColor = "white";
  USER_GAME_WIN = 0;
  COMPUTER_GAME_WIN = 0;
  USER_CHOISE = null;
  COMPUTER_CHOISE = null;
  GAME_LOG = [];
  actions_btns.forEach((actions_btn) => {
    actions_btn.disabled = false
})
};

actions_btns.forEach((actions_btn) => {
  actions_btn.addEventListener("click", () => {
    if (USER_GAME_WIN === 3 || COMPUTER_GAME_WIN === 3) resetGame();
    else {
      USER_CHOISE = actions_btn.innerText;
      COMPUTER_CHOISE = computerChoice();
      let Winner = selectWinner(USER_CHOISE, COMPUTER_CHOISE);

      data = {
        user: USER_CHOISE,
        computer: COMPUTER_CHOISE,
        winner: Winner,
      };

      GAME_LOG.push(data);

      if (Winner === "user") USER_GAME_WIN++;
      else if (Winner === "computer") COMPUTER_GAME_WIN++;
      else return;

      if (USER_GAME_WIN === 3){
        document.body.style.backgroundColor = "green";
        actions_btns.forEach((actions_btn) => {
            actions_btn.disabled = true
        })
      } 
      else if (COMPUTER_GAME_WIN === 3){    
        document.body.style.backgroundColor = "red";
        actions_btns.forEach((actions_btn) => {
            actions_btn.disabled = true
        })
      }
        
    }
  });
});

log_btn.addEventListener("click", () => {
  console.log(GAME_LOG);
});

reset_btn.addEventListener("click", () => {
    resetGame()
  });



  
  // error handeling 


//   try {
 
//     let age = prompt()
//     if(age !== '25'){
//         throw  'number is not valide' ;
//     }
//     console.log('continu');
//   }
//   catch(e){
//     console.log(e);
//   }
//   finally{

//     console.log('yesssss');

//   }