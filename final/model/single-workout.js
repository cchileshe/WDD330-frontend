  
import * as workouts from "../../model/data.js"; 

let startworkout = document.getElementById('start-workout')



$(document).ready(function() {
  
    let weekCount = 1;
   
    workouts.weeks.forEach(week => {
      $('<div class="week"><h2 class="bg-light label">Week '+weekCount+'</h2>').appendTo('#task-list');
      week.forEach(day => {
        let selected = workouts.workoutList.filter(workout => workout.id == day.workout_id);
        $(' <div class="row todo-item"><div class="col-1"><div class="checker"><input class="form-check-input" type="checkbox"></div></div><!--end checkbox --> <div class="col-6"> <span class="pt-1 form-checked-content"><strong>' + selected[0].name +'</strong><small class="d-block text-muted"><i class="pull-right bi-calendar-date"></i><span> '+ day.day + '</span></small></span> <a href="javascript:void(0);" class="float-right remove-todo-item"><i class="icon-close"></i></a></div><!--end middle column --><div class="col"><a href="" class="nav-link right">Details <i class="bi bi-info-circle"></i></a></div></div>').appendTo("#task-list");
      });
      weekCount++;
    });
    
  });
  
  