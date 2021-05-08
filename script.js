$("#demo").on("mousedown", function (e) {
    e.preventDefault();
    $(this).addClass("mouseDown");
}).on("mouseup", function () {
    $(this).removeClass("mouseDown");
});

document.getElementById("demo").addEventListener("mousedown", mouseDown);
document.getElementById("demo").addEventListener("mouseup", mouseUp);

function mouseDown() {
  document.getElementById("demo").style.cursor = "pointer";
}

function mouseUp() {
  document.getElementById("demo").style.cursor = "default";
}
