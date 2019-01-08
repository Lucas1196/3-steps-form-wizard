//Show Tips and Hide Tips functionality
var toggleButton = document.getElementById("toggle-tips");

toggleButton.addEventListener("click", function() {
    var content = document.getElementsByClassName("content-tips")[0];
        content.classList.toggle("active-content");
    setTimeout(function(){ 
       content.classList.remove("active-content");
    }, 4500);
    //Hide the container tooltip if you click on container Tips
    $(".tooltip-details").removeClass("active-details");
})


//Button for Reload the page to Step 1(Even if you are at Step 2 or 3, you will be redirected to Step 1)
var refreshPage = document.getElementById("refresh-form");

refreshPage.addEventListener("click", function(){
    setTimeout(function(){ 
        window.location.reload();
    }, 1500);
});


//Button Activator for MoreInfo, WhyAsk, Definition
$(".activator-details").click(function() {
    //Show Container(We can use toggle because toggle add "display:block" to our element). 
    //We can use toggleClass but toggle is much easier and less code
    //In this case we use toggleClass because we need of this one in the tooltip container details
    $(this).next(".tooltip-details").toggleClass("active-details");

    //This is the part of code which hide the first container
    if($('.tooltip-details:visible').length > 1) {
        $('.tooltip-details:visible').hide();
        $(this).next().show();
    }
    //Removeclass Active-Content from the div with Tips(OtherWise will be a problem(both containers will shown one over each other))
    $(".content-tips").removeClass("active-content");
})

// Pana aici a fost munca mea 100%, dupaia m-am ajutat de un exemplu.


// Showing the page to the screen and how button prev,next looks
var currentPage = 0;
showPage(currentPage);

//Show the current step on the screen
var page = document.getElementById("current-step"); // Get the span which will show the step you are at the moment
    page.innerHTML = currentPage + 1; // Display the currentPage 

function showPage(n) {
    // This function will display the specified form
    var form = document.getElementsByClassName("form");
        form[n].style.display = "block";
    //Number of steps shown in a span
    var pageSteps = document.getElementById("number-of-steps");
        pageSteps.innerHTML = form.length;
    //Fix the Previous/Next buttons
    if (n == 0) {
        document.getElementById("prev-step").classList.add("inactive");
        document.getElementById("prev-step").classList.remove("active");
        // document.getElementById("prev-step").disabled = "true";
    }   
    else {
        document.getElementById("prev-step").classList.add("active");
    }
    if (n == (form.length - 1)) {
        document.getElementById("next-step").value = "Submit";
        // document.getElementById("next-step").disabled = "true";
    } 
    else {
        document.getElementById("next-step").value = "Next Step";
    }
    //Run a function that will display the correct step indicator
    stepIndicator(n);
}

function nextPrev(n) {
    // This function will figure out which step to display
    var x = document.getElementsByClassName("form");
    // Exit the function if any field in the current step is invalid
    if (n == 1 && !validateForm()) return false;
    // Hide the current step:
    x[currentPage].style.display = "none";
    // Increase or decrease the current step by 1
    currentPage = currentPage + n;
    page.innerHTML = currentPage + 1;
    // if you have reached the end of the form...
    if (currentPage >= x.length) {
      // ... the form gets submitted:
      document.getElementById("regForm").submit();
      return false;
    }
    // Otherwise, display the correct step
    showPage(currentPage);
  }
  
function validateForm() {
    // This function deals with validation of the form fields
    var x, y, i, valid = true;
    x = document.getElementsByClassName("form");
    y = x[currentPage].getElementsByTagName("input");
    // A loop that checks every input field in the current step
    for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y[i].value == "") {
            // add an "invalid" class to the field:
            y[i].className += " invalid";
            // and set the current valid status to false
            valid = false;
        }
    }
    // If the valid status is true, mark the step as finished and valid
    if (valid) {
        document.getElementsByClassName("step")[currentPage].className += " finish";
    }
    return valid; // return the valid status
}

function stepIndicator(n) {
    // This function removes the "active-step" class of all steps
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
      //Adds the "active-step" class on the current step:
      x[i].className = x[i].className.replace("active-step", "");
    }
    x[n].className += " active-step";
}
