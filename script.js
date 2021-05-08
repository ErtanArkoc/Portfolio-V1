
document.getElementById("body").addEventListener("mousedown", mouseDown);
document.getElementById("body").addEventListener("mouseup", mouseUp);

function mouseDown() {
  document.getElementById("body").style.cursor = "url('/images/kapow.png'), auto";
}

function mouseUp() {
  document.getElementById("body").style.cursor = "pointer";
}

$("#body").on("mousedown", function (e) {
    e.preventDefault();
    $(this).addClass("mouseDown");
}).on("mouseup", function () {
    $(this).removeClass("mouseDown");
});

