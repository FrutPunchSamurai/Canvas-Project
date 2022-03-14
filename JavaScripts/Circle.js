import { canvas, ctx } from "./script.js";
import { acceleration_due_to_gravity} from "./Constants.js";
import { compareHitbox } from "./Functions.js";
import Mouse from "./Mouse.js";

export default class Circle {
    constructor(x, y) {
        this.maxRadius = 75;
        this.radius = Math.random() * 25 + 10;
        this.minRadius = this.radius;
        this.x = x;
        if (this.x - this.radius < 0) {
            this.x = this.radius + 1;
        }
        if (this.x + this.radius > innerWidth) {
            this.x = innerWidth - this.radius - 1;
        }
        this.y = y;
        if (this.y - this.radius < 0) {
            this.y = this.radius + 1;
        }
        if (this.y + this.radius > innerHeight) {
            this.y = innerHeight - this.radius - 1;
        }
        this.stroke = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},1)`;
        this.fill = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},1)`;
        this.xVelocity = 0;
        this.yVelocity = 0;
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

    updatePosition() {
        this.x += this.xVelocity;
        this.y += this.yVelocity;
    }

    updateHitbox() {
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
        else {
            this.yVelocity += 0.5;
        }

    }

    mouseInteraction(){
        if(compareHitbox(this.hitbox,Mouse.hitbox)){
            console.log("Colliding");
        }
        else{
            console.log("Not colliding");
        }
    }


    updateAll() {
        this.updateHitbox();
        this.updateVelocity();
        this.updatePosition();
        this.mouseInteraction();
    }

    animate() {
        this.draw();
        this.updateAll();
    }
}