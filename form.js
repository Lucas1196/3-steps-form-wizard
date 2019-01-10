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
    //Condition to hide the warning when info is clicked
    if ( $(".validate-email").hasClass("invalid") ) {
        $(".validate-email").removeClass("invalid");
    }
    //Condition for Content mobile < 991.98px;
    if (window.innerWidth < 991.98) {
        $(".content-tips").slideToggle("slow");
    }
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
        //Add class active to show you the button is inactive for that page
        document.getElementById("prev-step").classList.add("inactive");
        //Remove class active to show you the button is inactive for that page
        document.getElementById("prev-step").classList.remove("active");
        //Disable the prev-step button if you are on the first page
        document.getElementById("prev-step").disabled = true;
    }   
    else {
        document.getElementById("prev-step").classList.add("active");
        //Enable the prev-step button if you are not on the first page
        document.getElementById("prev-step").disabled = false;
    }
    if (n == (form.length - 1)) {
        //Change value of next-step to Submit(Just for last page) for submitting the form
        document.getElementById("next-step").value = "Submit";
        //Disable the next-step button if you are on last page
        // document.getElementById("next-step").disabled = true;
    } 
    else {
        document.getElementById("next-step").value = "Next Step";
        //Enable the next-step button if you are not on last page
        document.getElementById("next-step").disabled = false;
    }
    //Run a function that will display the correct step indicator
    stepIndicator(n);
}

// Function which validate the Email if it is true( if is written with )
// function validateEmail() {
//     var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
//     var email = document.getElementById("email-validation");

//     if (regexEmail.test(email.value)) {

//     } else {
        
//     }
// } 

function nextPrev(n) {
    // This function will figure out which step to display
    var x = document.getElementsByClassName("form");
    // Exit the function if any field in the current step is invalid
    if (n == 1 && !validateForm()) return false;
    // Hide the current step:
    x[currentPage].style.display = "none";
    // // Increase or decrease the current step by 1
    currentPage = currentPage + n;
    page.innerHTML = currentPage + 1;
    // if you have reached the end of the form...
    if (currentPage >= x.length) {
      // ... the form gets submitted:
      $(".container-loader").addClass("d-block");
      document.body.style.backgroundColor = "white";
      document.getElementById("regForm").submit();
      return false;
    }
    // Otherwise, display the correct step
    showPage(currentPage);
    // var z = document.getElementsByTagName("select");
}
  
function validateForm() {
    // This function deals with validation of the form fields
    var x, y, i, valid = true;
    x = document.getElementsByClassName("form");
    y = x[currentPage].getElementsByTagName("input");
    z = x[currentPage].getElementsByTagName("select");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y[i].value == "") {
            // Show the warning div which saying you don't entered an Email
            $(".validate-email").addClass("invalid");
            //Condition to hide the info when warning is visible
            if ($(".validate-email").hasClass("invalid")) {
                $(".content-tips").removeClass("active-content");
            }
            // and set the current valid status to false
            valid = false;
        }
    }
    for (var i = 0; i < z.length; i++) {
        if ($(z).selectedIndex <= 0) {
            console.log("I am 0");
        }
        else {
            x[currentPage].style.display = "none";
            // Increase or decrease the current step by 1
            currentPage = currentPage + n;
            page.innerHTML = currentPage + 1;
        }
    }
    // If the valid status is true, mark the step as finished and valid:
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
