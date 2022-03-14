var Mouse;
export default Mouse = {
    radius: 10,
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
        if(this.position.x == undefined){
            canvas.clearRect(0,0,innerWidth,innerHeight);
            return;
        }
        canvas.beginPath();
        canvas.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false);
        canvas.strokeStyle = 'black';
        canvas.stroke();
    }
}