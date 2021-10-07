const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
    }
  ]

  const toggleMenu = () => {
    document.querySelector('#navigation').classList.toggle('display');
  }
  
  document.querySelector('#navigation').addEventListener('click', toggleMenu);
  
  function sendAlert() {
    alert("This is an alert() method!");
  }
  
  function scrollBottom() {
    window.scrollTo(0,5000);
  }
  
  function scrollBack() {
    window.scrollTo(0,50);
  };


  const url = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/questions.json';

fetch(url)
  .then(res => res.json())
  .then(quiz => {
    view.start.addEventListener('click', () => game.start(quiz.questions), false);
    view.response.addEventListener('click', (event) => game.check(event), false);
});

// Utility functions
function random(a,b=1) {
// if only 1 argument is provided, we need to swap the values of a and b
  if (b === 1) {
	  [a,b] = [b,a];
  }
  return Math.floor((b-a+1) * Math.random()) + a;
}

function shuffle(array) {
  for (let i = array.length; i; i--) {
      let j = random(i)-1;
      [array[i - 1], array[j]] = [array[j], array[i - 1]];
  }
}

  //Week04 Chapter08 
  // Using forms to allow players to  enter their answers without usingpromptdialogs.

  const quiz = [
    { name: "Superman",realName: "Clark Kent" },
    { name: "Wonderwoman",realName: "Dianna Prince" },
    { name: "Batman",realName: "Bruce Wayne" },
  ];
// View Object
const view = {
  score: document.querySelector('#score strong'),
  question: document.querySelector('#question'),
  result: document.querySelector('#result'),
  info: document.querySelector('#info'),
  start: document.querySelector('#start'),
  response: document.querySelector('#response'),
  timer: document.querySelector('#timer strong'),
  hiScore: document.querySelector('#hiScore strong'),
render(target,content,attributes) {
for(const key in attributes) {
target.setAttribute(key, attributes[key]);
}
target.innerHTML = content;
},
show(element){
element.style.display = 'block';
},
hide(element){
element.style.display = 'none';
},

resetForm(){
this.response.answer.value = '';
this.response.answer.focus();
},

//Chp08: used to set up the view when the game starts
setup(){
this.show(this.question);
this.show(this.response);
this.show(this.result);
this.hide(this.start);
this.render(this.score,game.score);
this.render(this.result,'');
this.render(this.info,'');
this.resetForm();
},

/* Chp08:
This is called at the end of the game, and is responsible for 
hiding any elements that aren’t required and making the start 
button visible again. 

*/

teardown(){
this.hide(this.question);
this.hide(this.response);
this.show(this.start);
},
buttons(array){
  return array.map(value => `<button>${value}</button>`).join('');
}
};

const game = {
start(quiz){
this.score = 0;
this.questions = [...quiz];
view.setup();
this.secondsRemaining = 20;
this.timer = setInterval( this.countdown , 1000 );
this.ask();
},
countdown() {
  game.secondsRemaining--;
  view.render(view.timer,game.secondsRemaining);
    if(game.secondsRemaining <= 0) {
      game.gameOver();
    }
},
/* 
Chp08:
checks the length property of the this.questions array, 
//to see if there are any questions left to ask. 
If there are, thepop()method is used to remove the last 
element of the array and assign it to this.question. 
*/
ask(name){
  console.log('ask() invoked');
  if(this.questions.length > 2) {
    shuffle(this.questions);
    this.question = this.questions.pop();
    const options = [this.questions[0].realName, this.questions[1].realName, this.question.realName];
    shuffle(options);
    const question = `What is ${this.question.name}'s real name?`;
    view.render(view.question,question);
    view.render(view.response,view.buttons(options));
  }
  else {
    this.gameOver();
  }
},

//Chp08:call thegame.check()method that’s used to check if the answer submitted by the player is correct.
check(event){
event.preventDefault();

//grab the answer that was submitted by querying view.response.answer.value, which is the value stored in the<input>field
check(event){
  console.log('check(event) invoked');
  const response = event.target.textContent;
  const answer = this.question.realName;
  if(response === answer){
    console.log('correct');
    view.render(view.result,'Correct!',{'class':'correct'});
    this.score++;
    view.render(view.score,this.score);
  } else {
    console.log('wrong');
    view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
  }
view.resetForm();
this.ask();
},
gameOver(){
  console.log('gameOver() invoked');
  view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
  view.teardown();
  clearInterval(this.timer);
},
hiScore(){
  const hi = localStorage.getItem('highScore') || 0;
  if(this.score > hi || hi === 0) {
    localStorage.setItem('highScore',this.score);
    view.render(view.info,'** NEW HIGH SCORE! **');
  }
  return localStorage.getItem('highScore');
}
}