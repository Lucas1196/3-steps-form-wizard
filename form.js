//Show Tips and Hide Tips functionality
var toggleButton = document.getElementById("toggle-tips");

toggleButton.addEventListener("click", function() {
    var content = document.getElementsByClassName("content-tips")[0];
        content.classList.toggle("active-content");
    setTimeout(function(){ 
       content.classList.remove("active-content");
    }, 2500);
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
    $(this).next(".tooltip-details").toggleClass("active-details");
})

// Pana aici a fost munca mea 100%, dupaia m-am ajutat de un exemplu.


// Showing the page to the screen and how button prev,next looks
var currentPage = 0;
showPage(currentPage);

//Show the current step on the screen
var page = document.getElementById("current-step");
    page.innerHTML = currentPage + 1;

function showPage(n) {
    var form = document.getElementsByClassName("form");
    //Number of steps
    var pageSteps = document.getElementById("number-of-steps");
        pageSteps.innerHTML = form.length;
    form[n].classList.add("active-form");
    if (n == 0) {
        document.getElementById("prev-step").classList.add("inactive");
    }
    else {
        document.getElementById("prev-step").classList.add("active");
    }
    if (n == (form.length - 1)) {
        document.getElementById("next-step").value = "Submit";
    } 
    else {
        document.getElementById("next-step").value = "Next Step";
    }
    stepIndicator(n);
}

function stepIndicator(n) {
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace("active-step", "");
    }
    x[n].className += " active-step";
}
