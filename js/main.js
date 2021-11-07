

const links = [
  {label: "Week 1", url: "week1/index.html"},
  {label: "Week 2", url: "week02/index.html"},
  /*{label: "Week 2 Team Activity", url: "week2/team.html"},*/
  {label: "Week 3", url: "week03/index.html"},
/*  {label: "Week 3 Team Activity", url: "week3/wk3.html"},*/
  {label: "Week 4", url: "week04/index.html"},
  {label: "Week 5", url: "week05/index.html"},
  {label: "Week 6: To Do Project", url: "week5/ToDo/index.html"},
  {label: "Week 7", url: "week07/index.html"},
  {label: "Week 8", url: "week08/index.html"},
  {label: "Week 9", url: "week09/index.html"},
  {label: "Week 10", url: "week10/index.html"},
  {label: "Final Project", url: "project/index.html"}
]

// const links = [
//     {
//       label: "Week1 notes",
//       url: "week1/index.html"
//     }
//   ]

     
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

var listy = document.createElement('ul');


for (let i = 0; i < links.length; i++) {
    let item = document.createElement('li');
    let a = document.createElement('a');

    var link = document.createTextNode(links[i].label);
    a.appendChild(link);
    a.href = links[i].url;
    item.appendChild(a);

    listy.appendChild(item);

    
}
document.querySelector('div.links').appendChild(listy);