import Circle from "./Circle.js";

var canvas = document.querySelector("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
var ctx = canvas.getContext("2d");

const circle_array = [];

canvas.addEventListener("click", function (e) {
    circle_array.push(new Circle(e.clientX, e.clientY));
});

// canvas.addEventListener("touchstart", function (e) {
//   circle_array.push(new Circle(e.clientX, e.clientY));
// });

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i < circle_array.length; i++) {
        circle_array[i].animate();
    }
}

animate();


export {canvas , ctx};