'use strict'


document.querySelector('.name').addEventListener('click',function(){
   const namee= document.querySelector('.namee').value;
   document.querySelector('.heading').textContent=`GUESS THE NUMBER ${namee} FROM 1 TO 20`;
});




let secretnumber = Math.trunc(Math.random()*20)+1;
const again=document.querySelector('.again').addEventListener('click',function () {
    secretnumber= Math.trunc(Math.random()*20)+1;
    
    score=20;
});
let score=20;
let highscore=0;

document.querySelector('.guess').addEventListener('click',function(){
    const number= Number(document.querySelector('.number').value);
if (secretnumber===number){
    document.querySelector('.win').textContent='congratulation you won';
    document.querySelector('body').style.backgroundColor='green';
    document.querySelector('.q').textContent=number;
    document.querySelector('.message').textContent='won';
    if(highscore<score){
        highscore=score;
        document.querySelector('.highscore').textContent=highscore;
    }

}
else if (!number) {
    document.querySelector('.message').textContent='lol try';
}
else if(secretnumber<number){
    document.querySelector('.message').textContent='little smaller';
    score--;
    document.querySelector('.score').textContent=score;
}
else if(secretnumber>number){
    document.querySelector('.message').textContent='little bigger';
    
score--;
document.querySelector('.score').textContent=score;
}
});
