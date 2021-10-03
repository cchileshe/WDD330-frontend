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
  }

  //Chapter 5 Objects
const quiz = [
    { name: "Superman",realName: "Clark Kent" },
    { name: "Wonder Woman",realName: "Diana Prince" },
    { name: "Batman",realName: "Bruce Wayne" },
    {name: "Captain America", realNAme:"Steve Rogers"}
];

const game = {
  start(quiz){
      this.questions = [...quiz];
      this.score = 0;
      // main game loop
      for(const question of this.questions){
      this.question = question;
      this.ask();
      }
      // end of main game loop
      this.gameOver();
  },
  ask(){
      const question = `What is ${this.question.name}'s real name?`;
      const response =  prompt(question);
      this.check(response);
  },
  check(response){
      const answer = this.question.realName;
      if(response === answer){
      alert('Correct!');
      this.score++;
      } else {
      alert(`Wrong! The correct answer was ${answer}`);
      }
  },
  gameOver(){
      alert(`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
  }
}

game.start(quiz);