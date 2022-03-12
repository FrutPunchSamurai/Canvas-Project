var canvas = document.querySelector('canvas');
canvas.width = innerWidth;
canvas.height = innerHeight;
var ctx = canvas.getContext('2d');

// class Hitbox {
//     constructor(up, down, left, right) {
//         this.up = up;
//         this.down = down;
//         this.left = left;
//         this.right = right;
//     }
// }

class Circle {
    constructor(x, y) {
        this.radius = Math.random() * 25 + 1;
        this.x = x;
        if(this.x-this.radius<0){
            this.x = this.radius;
        }
        if(this.x+this.radius>innerWidth){
            this.x = innerWidth-this.radius;
        }
        this.y = y;
        if(this.y-this.radius<0){
            this.y = this.radius;
        }
        if(this.y+this.radius>innerHeight){
            this.y = innerHeight-this.radius;
        }
        this.stroke = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},1)`;
        this.fill = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},1)`;
        this.xVelocity = (Math.random() - 0.5) * 10;
        this.yVelocity = (Math.random() - 0.5) * 10;
        //const hitbox = new Hitbox(this.y - this.radius, this.y + this.radius, this.x - this.radius, this.x + this.radius);
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.strokeStyle = `${this.stroke}`;
        ctx.fillStyle = `${this.fill}`;
        ctx.stroke();
        ctx.fill();
    }

    update() {
        this.draw();
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.xVelocity = -this.xVelocity;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.yVelocity = -this.yVelocity;
        }
        this.x += this.xVelocity;
        this.y += this.yVelocity;
    }

}

const circle_array = [];

// for (var i = 0; i < 750; i++) {
//     circle_array.push(new Circle());
// }

canvas.addEventListener('click', function (e) {
    circle_array.push(new Circle(e.clientX, e.clientY));
});

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i < circle_array.length; i++) {
        circle_array[i].update();
    }
}

animate();

