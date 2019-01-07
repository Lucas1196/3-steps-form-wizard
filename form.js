//Show Tips and Hide Tips functionality
var toggleButton = document.getElementById("toggle-tips");

toggleButton.addEventListener("click", function(e) {
    var content = document.getElementsByClassName("content-tips")[0];
        content.classList.toggle("active-content");
})
