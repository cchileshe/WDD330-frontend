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
question: document.getElementById('question'),
result: document.getElementById('result'),
info: document.getElementById('info'),
start: document.getElementById('start'),
response: document.querySelector('#response'),
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
}
};

const game = {
start(quiz){
  console.log('works');
this.score = 0;
this.questions = [...quiz];
view.setup();
this.ask();
},


/* 
Chp08:
checks the length property of the this.questions array, 
//to see if there are any questions left to ask. 
If there are, thepop()method is used to remove the last 
element of the array and assign it to this.question. 
*/
ask(name){
if(this.questions.length > 0) {
this.question = this.questions.pop();
const question = `What is ${this.question.name}'s real name?`;
view.render(view.question,question);
}
else {
this.gameOver();
}
},

//Chp08:call thegame.check()method that’s used to check if the answer submitted by the player is correct.
check(event){
event.preventDefault();

//grab the answer that was submitted by querying view.response.answer.value, which is the value stored in the<input>field
const response = view.response.answer.value;
const answer = this.question.realName;
if(response === answer){
view.render(view.result,'Correct!',{'class':'correct'});
this.score++;
view.render(view.score,this.score);
} else {
view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
}
view.resetForm();
this.ask();
},
gameOver(){
view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
view.teardown();
}
}

view.start.addEventListener('onClick', () => game.start(quiz), false);

// Chp08:add an event handler that fires when the form is submitted
view.response.addEventListener('submit', (event) => game.check(event), false);
view.hide(view.response);
