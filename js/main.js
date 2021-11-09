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