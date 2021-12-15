
import * as workouts from "../../model/data.js"; 
// import Chart from '/chart.js/auto';

// Chart.register(...registerables);

            
//=============================
// CURRENT DATE
//=============================
const Event = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById("dateHeading").innerHTML= Event.toLocaleDateString(undefined, options);


//=============================
// SIDE BAR
//=============================
/* Set the width of the sidebar to 170px and the left margin of the page content to 170px */
function openNav() {
  document.getElementById("mySidebar").style.width = "170px";
    document.getElementById("main").style.marginLeft = "0";

 
  
  }
  

  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  $(function() {
    $(".toggle-menu").click(function() {
      $(this).toggleClass("active");
      $('.menu-drawer').toggleClass("open");
    });
  });

//=============================
// PROGRESS CHARTS
//=============================
// var require= chart;
// const Chart = require('chart.js');
// const myChart = new Chart(ctx, {...});



$(document).ready(function() {
  
  let weekCount = 1;
  
  
  // let totalMonths= totalWorkoutDays /8;
  // console.log(totalMonths);


// getting the number of weeks in multidemsional array
  var NumberOfweeks = workouts.weeks; 
  for(var i = 0; i < NumberOfweeks.length; i++);
  let totalNumberofWeeks= NumberOfweeks;
  
// getting the number of days in multidemsional array
  
  for(var i = 0; i < NumberOfweeks.length; i++){
    for(let k = 0; k < NumberOfweeks[i].length; k++)
    
    {
      let workoutDays= NumberOfweeks[i][k].length;
      let totalMonths= workoutDays + 4;
      console.log(totalMonths);
  }
      
    }
    
  
  let daysLeft= 0;
 
  workouts.weeks.slice(0, 1).forEach(week => {
  
    week.slice(0, 3).forEach(day => {
      let selected = workouts.workoutList.filter(workout => workout.id == day.workout_id);
      $(' <div class="row upcoming-item"><div class="col-1"><div class="checker"><input class="form-check-input" type="checkbox"></div></div><!--end checkbox --> <div class="col-6"> <span class="pt-1 form-checked-content"><strong>' + selected[0].name +'</strong><small class="d-block text-muted"><i class="pull-right bi-calendar-date"></i><span> '+ day.day + '</span></small></span> <a href="javascript:void(0);" class="float-right remove-todo-item"><i class="icon-close"></i></a></div><!--end middle column --><div class="col"><a href="" class="nav-link right">Details <i class="bi bi-info-circle"></i></a></div></div>').appendTo("#upcoming");
    });
    weekCount;
  });
  
 });


 //=============================
// PROGRESS CHARTS
//=============================
//setup block
const datapoints = [12, 56,];
const data = {
  datasets: [{
    label: '20%',
    data: datapoints,
    backgroundColor: [
        'rgba(248,195,70)',
        'rgba(237,237,239)',
       
    ],
    borderColor:[
      'transparent'

    ],
    cutout:60
}]
};


//show percentage plugin
const percent = {
  id: 'percent',
  beforeDraw(chart, args, options){
    const {ctx, chartArea: {top, right, bottom, left, width, height}} = chart
    ctx.save();
    //get text
    ctx.font = options.fontSize + 'px ' + options.fontFamily;
    ctx.textStyle = options.fontColor;
    ctx.textAlign = 'center';
    ctx.fillText(datapoints[0]+'%',width/2, (height / 2) + (options.fontSize * 0.34))
      
  }
};

//config block 
const config = {
  type: 'doughnut',
  data,
  options:{
    plugins:{
      percent:{
        fontColor: '#f8c346',
        fontSize: 45,
        fontFamily: 'serif'
      }
    }
  },
  plugins: [percent]
};
//render init
//const weeklyProgress = document.getElementById('weekly');
const weekly = new Chart(
  document.getElementById('weekly'), 
  config
  );
// workouts.weeks.filter(workout => workout.id == day.workout_id)}









const monthlyProgress = document.getElementById('monthly');
const overallProgress = document.getElementById('overall');


export function months(config) {
  var cfg = config || {};
  var count = cfg.count || 12;
  var section = cfg.section;
  var values = [];
  var i, value;

  for (i = 0; i < count; ++i) {
    value = MONTHS[Math.ceil(i) % 12];
    values.push(value.substring(0, section));
  }

  return values;
}

const monthlyChart = new Chart(monthlyProgress, {
  type: 'doughnut',

  data: {
    datasets: [{
      label: '20%',
      data: [44, 56,],
      backgroundColor: [
          'rgba(90,216,249)',
          'rgba(237,237,239)',
          
      ],
      borderColor:[
      'transparent'
    ],
      cutout:60
  }],
  options:{
    plugins:{
      percent:{
        fontColor: '#f8c346',
        fontSize: 45,
        fontFamily: 'serif'
      }
    }
  },
  plugins: [percent]
}
// workouts.weeks.filter(workout => workout.id == day.workout_id)}
});


const overallChart = new Chart(overallProgress, {
  type: 'doughnut',
  data: {
    datasets: [{
      label: '20%',
      data: [12, 19,],
      backgroundColor: [
          'rgba(95,204,54)',
          'rgba(237,237,239)',
          
      ],
      borderColor:[
        'transparent'
  
      ],
      cutout:62
  }]
}
// workouts.weeks.filter(workout => workout.id == day.workout_id)}
});