let score = JSON.parse(localStorage.getItem('score')) || {
  winCount: 0,
  loseCount: 0,
  tieCount: 0
};

function updateScore(){
  document.querySelector('.js-wins').innerHTML = score.winCount;
  document.querySelector('.js-loses').innerHTML = score.loseCount;
  document.querySelector('.js-ties').innerHTML = score.tieCount;
}

updateScore();

// if (!score){
//   score = {
//     winCount: 0,
//     loseCount: 0,
//     tieCount: 0
//   };
// }



function playGame(playerChoice){
  let computerChoice = '';        
  let result = '';
  const rand = Math.floor(Math.random() * 3);

  if (rand === 0){
    computerChoice = 'Rock'; 
  } else if(rand === 1){
    computerChoice = 'Paper';
  } else{
    computerChoice = 'Scissors';
  }

  if(playerChoice === computerChoice){
    result = 'the match is Draw!';
    score.tieCount++;
  } else if(
    playerChoice === 'Rock' && computerChoice === 'Scissors' ||
    playerChoice === 'Paper' && computerChoice === 'Rock' ||
    playerChoice === 'Scissors' && computerChoice === 'Paper'
  ){
    result = 'you Won!';
    score.winCount++;
  } else{ 
    result = 'you Lose!';
    score.loseCount++;
  }               
  
  localStorage.setItem('score', JSON.stringify(score));
 
  document.querySelector('.js-wins')
    .innerHTML = score.winCount;
  document.querySelector('.js-loses')
    .innerHTML = score.loseCount;
  document.querySelector('.js-ties')
    .innerHTML = score.tieCount;

  document.querySelector('.js-result-first')
    .innerHTML = result.toUpperCase();
    
  // let playerIcon = document.querySelector('.js-player');
  // let computerIcon = document.querySelector('.js-computer');
    
//   if(playerChoice === 'Rock'){
//     playerIcon.innerHTML = `<img src="images/rock-emoji.png" class="player-com-icon">`;
//   } else if (playerChoice === 'Paper'){
//     playerIcon.innerHTML = `<img src="images/paper-emoji.png" class="player-com-icon">`;
//   } else {
//     playerIcon.innerHTML = `<img src="images/scissors-emoji.png" class="player-com-icon">`;
//   }

//   if(computerChoice === 'Rock'){
//     computerIcon.innerHTML = `<img src="images/rock-emoji.png" class="player-com-icon">`;
//   } else if (computerChoice === 'Paper'){
//     computerIcon.innerHTML = `<img src="images/paper-emoji.png" class="player-com-icon">`;
//   } else {
//     computerIcon.innerHTML = `<img src="images/scissors-emoji.png" class="player-com-icon">`;
//   }

document.querySelector('.js-player')
  .innerHTML = `<img src="images/${playerChoice.toLowerCase()}-emoji.png" class="player-com-icon">`

document.querySelector('.js-computer')
  .innerHTML = `<img src="images/${computerChoice.toLowerCase()}-emoji.png" class="player-com-icon">`

}

console.log(document.querySelector('.js-score'));

function resetGame() {
  score.winCount = 0;
  score.loseCount = 0;
  score.tieCount = 0;

  localStorage.setItem('score', JSON.stringify(score));
  console.log('Game has been reset');
  updateScore();
  
  document.querySelector('.js-result-first')
    .innerHTML = '';

  document.querySelector('.js-player').innerHTML = '<img src="images/player-think.png" class="com-player-think">';
  document.querySelector('.js-computer').innerHTML = '<img src="images/com-think.png" class="com-player-think">';

}
