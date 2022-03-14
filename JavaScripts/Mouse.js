var Mouse;
export default Mouse = {
    radius: 30,
    position: {
        x: undefined,
        y: undefined,
    },
    hitbox: {
        up: undefined,
        down: undefined,
        left: undefined,
        right: undefined
    },
    draw_hitbox: function(canvas){
        canvas.beginPath();
        canvas.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false);
        canvas.strokeStyle = 'black';
        canvas.stroke();
    }
}