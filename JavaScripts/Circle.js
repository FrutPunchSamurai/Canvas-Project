import { canvas, ctx } from "./script.js";
import { acceleration_due_to_gravity} from "./Constants.js";
import { compareHitbox } from "./Functions.js";
import Mouse from "./Mouse.js";

export default class Circle {
    constructor(x, y) {
        this.maxRadius = 75;
        this.radius = Math.random() * 25 + 10;
        this.minRadius = this.radius;
        this.position = {
            x: x,
            y: y
        };
        this.position.x = x;
        if (this.position.x - this.radius < 0) {
            this.position.x = this.radius + 1;
        }
        if (this.position.x + this.radius > innerWidth) {
            this.position.x = innerWidth - this.radius - 1;
        }
        this.position.y = y;
        if (this.position.y - this.radius < 0) {
            this.position.y = this.radius + 1;
        }
        if (this.position.y + this.radius > innerHeight) {
            this.position.y = innerHeight - this.radius - 1;
        }
        this.stroke = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},1)`;
        this.fill = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},1)`;
        this.position.xVelocity = 0;
        this.position.yVelocity = 0;
        this.hitbox = {
            up: this.position.y - this.radius,
            down: this.position.y + this.radius,
            left: this.position.x - this.radius,
            right: this.position.x + this.radius,
        };
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false);
        ctx.strokeStyle = `${this.stroke}`;
        ctx.fillStyle = `${this.fill}`;
        ctx.stroke();
        ctx.fill();
    }

    updatePosition() {
        this.position.x += this.position.xVelocity;
        this.position.y += this.position.yVelocity;
    }

    updateHitbox() {
        this.hitbox = {
            up: this.position.y - this.radius,
            down: this.position.y + this.radius,
            left: this.position.x - this.radius,
            right: this.position.x + this.radius,
        };
    }

    updateVelocity() {
        if (this.hitbox.right > innerWidth || this.hitbox.left < 0) {
            this.position.xVelocity = -this.position.xVelocity;
        }
        if (this.hitbox.down > innerHeight || this.hitbox.up < 0) {
            this.position.yVelocity = -this.position.yVelocity;
        } 
        else {
            this.position.yVelocity += 0.5;
        }

    }

    mouseInteraction(){
        if(compareHitbox(this,Mouse)){
            console.log("Colliding");
            return;
        }
        console.log("Not colliding");
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