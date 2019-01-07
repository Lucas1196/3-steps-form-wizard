//Show Tips and Hide Tips functionality
var toggleButton = document.getElementById("toggle-tips");

toggleButton.addEventListener("click", function() {
    var content = document.getElementsByClassName("content-tips")[0];
        content.classList.toggle("active-content");
    setTimeout(function(){ 
       content.classList.remove("active-content");
    }, 2000);
})


//Button for Reload the page to Step 1(Even if you are at Step 3 or 2, you will be redirected to Step 1)
var refreshPage = document.getElementById("refresh-form");
// var fade = document.getElementsByTagName("body");

refreshPage.addEventListener("click", function(){
    setTimeout(function(){ 
        window.location.reload();
    }, 1000);
});


// Pana aici a fost munca mea 100%, dupaia m-am ajutat de un exemplu.


// Showing the page to the screen and how button prev looks
var currentPage = 0;
showPage(currentPage);

function showPage(n) {
    var x = document.getElementsByClassName("form");
    x[n].classList.add("active-form");
    if (n == 0) {
        document.getElementById("prev-step").classList.add("inactive");
    }
    else {
        document.getElementById("prev-step").classList.add("active");
    }
    if (n == (x.length - 1)) {
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
