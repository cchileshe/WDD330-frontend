import * as workouts from "../../model/data.js";   
 
class Timer {
  constructor(root) {
    root.innerHTML = Timer.getHTML();

    this.el = {
      minutes: root.querySelector(".timer__part--minutes"),
      seconds: root.querySelector(".timer__part--seconds"),
      control: document.querySelector(".timer__btn--control"),
      reset: root.querySelector(".timer__btn--reset")
    };
    this.day = new Date();
    this.options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric'

    };


    this.currentDay = localStorage.getItem('currentDay') ? localStorage.getItem('currentDay') :1;
    console.log(this.currentDay);
    this.interval = null;
    this.history = localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history')) : [];
     this.tempHistory = []
    this.remainingSeconds = localStorage.getItem('previousTime') ? localStorage.getItem('previousTime') : 30 * 60;
    this.updateInterfaceTime();
    this.count= 0
    this.el.control.addEventListener("click", () => {
      if (this.interval === null) {
        this.start();
      } else {
        this.stop();
        this.count++

        localStorage.setItem("previousTime", this.remainingSeconds);
        this.history.push({
          'time': this.remainingSeconds,
          'date': this.day.toLocaleDateString(undefined, this.options),
          'name': workouts.workoutList.filter(workout => workout.id == this.currentDay).name
        });
        
        localStorage.setItem('history', JSON.stringify(this.history));
        this.getRecords()
      }
    });
  }

  updateInterfaceTime() {
    const minutes = Math.floor(this.remainingSeconds / 60);
    const seconds = this.remainingSeconds % 60;
    const time_limit = ((minutes * 60) * 1000);

    this.el.minutes.textContent = minutes.toString().padStart(2, "0");
    this.el.seconds.textContent = seconds.toString().padStart(2, "0");
    this.getRecords();
  }


  start() {
    if (this.remainingSeconds === 0) return;

    this.interval = setInterval(() => {
      this.remainingSeconds--;
      this.updateInterfaceTime();

      if (this.remainingSeconds === 0) {
        this.stop();
      }
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);

    this.interval = null;
  }

  static getHTML() {
    return `
              <span class="mins timer__part timer__part--minutes">00</span>
              <span class="timer__part">mins</span>
              <span class="secs timer__part timer__part--seconds">00</span>
              <span class="timer__part">secs</span>
              <div class="row"> 
                <button type="button" class="btn btn-outline-info btn-circle btn-md">
                  <span class="material-icons">start</span>
                </button>
                <button type="button" class="btn btn-outline-secondary btn-circle btn-md">
                  <span class="material-icons">pause</span>
                </button>
              </div>`

  }

  getRecords() {
    let records = document.querySelector('#records')
    let content = ``;
    this.history.forEach(record => {
      const minutes = Math.floor(record.time / 60);
      const seconds = record.time % 60;
      content += `<div class="row border-bottom">
                  <div class="col"><p id="" class="small-text "> ${minutes} mins ${seconds} secs</p></div>
                  <div class="col "><p id="" class="small-text right"> ${record.date}</p></div>
                  </div>`
    })
    records.innerHTML = content;
  }
}

new Timer(
  document.querySelector(".timer")
);




/*

const el = document.querySelector(".clock");
const bell = document.querySelector("audio");

const mindiv = document.querySelector(".mins");
const secdiv = document.querySelector(".secs");


localStorage.setItem("btn", "focus");

let initial, totalsecs, perc, paused, mins, seconds;

// startBtn
document.querySelector('#maxOut').addEventListener("click", () => {
  let btn = localStorage.getItem("btn");
  

  if (btn === "focus") {
    mins = +localStorage.getItem("focusTime") || 30; //set timer to 30
  } else {
    mins = +localStorage.getItem("breakTime") || 1; 
  }

//   second = 1000,
// minute = second * 60,
        
  seconds = 1000;
  totalsecs = mins * 60;
  // setTimeout(decremenT(), 60);
  // startBtn.style.transform = "scale(0)";
  paused = true;
});

function decremenT() {
  mindiv.textContent = Math.floor(seconds / 60);
  secdiv.textContent = seconds % 60 > 9 ? seconds % 60 : `0${seconds % 60}`;
  // if (circle.classList.contains("danger")) {
  //   circle.classList.remove("danger");
  // }

  if (seconds > 0) {
    perc = Math.ceil(((totalsecs - seconds) / totalsecs) * 100);
    // setProgress(perc);
    seconds--;
    initial = window.setTimeout("decremenT()", 1000);
    // if (seconds < 10) {
    //   circle.classList.add("danger");
    // }
  } else {
    mins = 0;
    seconds = 0;
    bell.play();
    let btn = localStorage.getItem("btn");

    if (btn === "focus") {
      // startBtn.textContent = "start break";
      // startBtn.classList.add("break");
      localStorage.setItem("btn", "break");
    } else {
      // startBtn.classList.remove("break");
      // startBtn.textContent = "start focus";
      localStorage.setItem("btn", "focus");
    }
    startBtn.style.transform = "scale(1)";
  }
}
*/