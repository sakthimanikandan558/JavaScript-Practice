const score=JSON.parse(localStorage.getItem('score'))||
{
  win:0,
  lose:0,
  tie:0
};
function showScore(){
let totScore=document.querySelector('.game-score');
totScore.innerHTML=(`Wins:${score.win}  Losses:${score.lose}  Ties:${score.tie}`);
}
showScore();
function reset(){
  score.win=0;
  score.lose=0;
  score.tie=0;
  localStorage.removeItem('score');
}
let isAuto=false;
let intervelId;
  function autoPlay(){
    if(!isAuto){
      intervelId=setInterval(()=>{
        const playermove=randomPick();
        playgame(playermove);
      },1200);
      isAuto=true; 
      const autoButton=document.querySelector('.auto-button');
      autoButton.innerHTML=('Stop');
    }
    else{
      clearInterval(intervelId);
      isAuto=false;
      const autoButton=document.querySelector('.auto-button');
      autoButton.innerHTML=('Auto Play');
    }
  }
function playgame(playermove){
const computerPick=randomPick();
let result='';
if(playermove==='rock'){
if(computerPick==='rock'){
result='Tie';
}else if(computerPick==='paper'){
result='You Lose';
}else{
result='You Win';
}
}else if(playermove==='paper'){
if(computerPick==='rock'){
result='You Win';
}else if(computerPick==='paper'){
result='Tie';
}else{
result='You Lose';
}
}else{
if(computerPick==='rock'){
result='You Lose';
}else if(computerPick==='paper'){
result='You Win';
}else{
result='Tie';
}
}
if(result==='You Win'){
score.win+=1;
}
else if(result==='You Lose'){
score.lose+=1;
}
else{
score.tie+=1;
}
localStorage.setItem('score',JSON.stringify(score));
document.querySelector('.js-result')
.innerHTML=(result);
document.querySelector('.js-move')
.innerHTML=(`      You
<img src="imgs/${playermove}.png" class="move">
<img src="imgs/${computerPick}.png" class="move">
Computer`);
showScore();
}  
function randomPick(){
const randomNum=Math.random();
let computerPick='';
if(randomNum>=0&&randomNum<1/3){
    computerPick='rock';
}else if(randomNum>=1/3&&randomNum<2/3){
    computerPick='paper';
}else{
    computerPick='scissors';
}
return computerPick;
}