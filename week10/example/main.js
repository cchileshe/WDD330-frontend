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

const question = "What is Superman's real name?"
const answer = prompt(question);
alert(`You answered ${answer}`);

