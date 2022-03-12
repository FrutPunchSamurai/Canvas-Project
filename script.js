var canvas = document.querySelector('canvas');
canvas.width = innerWidth;
canvas.height = innerHeight;
var ctx = canvas.getContext('2d');

class Circle {
    constructor(x, y) {
        this.radius = Math.random() * 25 + 1;
        this.x = x;
        if(this.x-this.radius<0){
            this.x = this.radius+1;
        }
        if(this.x+this.radius>innerWidth){
            this.x = innerWidth-this.radius-1;
        }
        this.y = y;
        if(this.y-this.radius<0){
            this.y = this.radius+1;
        }
        if(this.y+this.radius>innerHeight){
            this.y = innerHeight-this.radius-1;
        }
        this.stroke = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},1)`;
        this.fill = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},1)`;
        this.xVelocity = (Math.random() - 0.5) * 10;
        this.yVelocity = (Math.random() - 0.5) * 10;
        this.hitbox = {
            up: this.y - this.radius,
            down: this.y + this.radius,
            left: this.x - this.radius,
            right: this.x + this.radius,
        };
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.strokeStyle = `${this.stroke}`;
        ctx.fillStyle = `${this.fill}`;
        ctx.stroke();
        ctx.fill();
    }

    updateHitbox(){
        this.hitbox = {
            up: this.y - this.radius,
            down: this.y + this.radius,
            left: this.x - this.radius,
            right: this.x + this.radius,
        };
    }

    updateVelocity() {
        if (this.hitbox.right > innerWidth || this.hitbox.left < 0) {
            this.xVelocity = -this.xVelocity;
        }
        if (this.hitbox.down > innerHeight || this.hitbox.up < 0) {
            this.yVelocity = -this.yVelocity;
        }
    }

    updateDirection(){
        this.x += this.xVelocity;
        this.y += this.yVelocity;
    }

    updateAll() {
        this.updateHitbox();
        this.updateVelocity();
        this.updateDirection();
    }

    animate(){
        this.draw();
        this.updateAll();
    }

}

const circle_array = [];

canvas.addEventListener('click', function (e) {
    circle_array.push(new Circle(e.clientX, e.clientY));
});

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i < circle_array.length; i++) {
        circle_array[i].animate();
    }
}

animate();

