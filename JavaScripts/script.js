import Circle from "./Circle.js";
import Mouse from "./Mouse.js";

var canvas = document.querySelector("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
var ctx = canvas.getContext("2d");
const circle_array = [];

//updating mouse position and hitbox
document.addEventListener("mousemove",function(e){
    Mouse.position.x = e.clientX;
    Mouse.position.y = e.clientY;
    Mouse.hitbox.up = Mouse.position.y - Mouse.radius;
    Mouse.hitbox.down = Mouse.position.y + Mouse.radius;
    Mouse.hitbox.left = Mouse.position.x - Mouse.radius;
    Mouse.hitbox.right = Mouse.position.y + Mouse.radius;
});

//generating ballz
canvas.addEventListener("click", function(e) {
    circle_array.push(new Circle(e.clientX, e.clientY));
});

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    Mouse.draw_hitbox(ctx);
    for (var i = 0; i < circle_array.length; i++) {
        circle_array[i].animate();
    }
}

animate();

export { canvas, ctx };