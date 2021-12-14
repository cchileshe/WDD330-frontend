            
//=============================
// CURRENT DATE
//=============================
const Event = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById("dateHeading").innerHTML=Event.toLocaleDateString(undefined, options);


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
// LOCAL STORAGE WORKOUTS
//=============================
//console.log(workouts.weeks);


// localStorage.setItem();