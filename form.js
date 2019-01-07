//Show Tips and Hide Tips functionality
var toggleButton = document.getElementById("toggle-tips");

toggleButton.addEventListener("click", function() {
    var content = document.getElementsByClassName("content-tips")[0];
        content.classList.toggle("active-content");
})


//Button for Reload the page to Step 1(Even if you are at Step 3 or 2, you will be redirected to Step 1)
var refreshPage = document.getElementById("refresh-form");
// var fade = document.getElementsByTagName("body");

refreshPage.addEventListener("click", function(){
    setTimeout(function(){ 
        window.location.reload();
    }, 1000);
});


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
}



//Button Next Page
// var nextPage = document.getElementById("next-page");

// nextPage.addEventListener("click", function() {

// })

//Button Prev Page
// var prevPage = document.getElementById("prev-page");

// prevPage.addEventListener("click", function() {

// })
