const links = [
  {
    label: "Week 01",
    url: "week01/"
  },

  {
    label: "Week 02",
    url: "week02/notes.html"
  },    
  {
    label: "Week 02",
    url: "week02/index.html"
  },
    
  {
    label: "Week 03",
    url: "week03/"
  },    
  
  {
    label: "Week 04 ",
    url: "week04/index.html"
  },        
    
  {
    label: "Week 05 ",
    url: "week05/index.html"
  },   
  {
    label: "Week 07 ",
    url: "week07/index.html"
  },        
  {
    label: "Week 08",
    url: "week08/index.html"
  },    
  {
    label: "Week 09",
    url: "week9/index.html"
  },

  {
    label: "Week 10 ",
    url: "week10/index.html"
  },    
    
  {
    label: "Week 11",
    url: "week11/client/week11.html"
  },    
  {
    label: "Final Project",
    url: "n"
  }
];

const orderedlist = document.querySelector("ol");

for (const item of links) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.setAttribute("href", item.url);
  a.textContent = item.label;
  li.appendChild(a);

  orderedlist.appendChild(li);
}
     
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