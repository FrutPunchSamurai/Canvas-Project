function distance(p1,p2){
    return Math.sqrt(Math.pow(p1.x-p2.x,2)+Math.pow(p1.y-p2.y,2));
}
function compareHitbox(o1,o2){
    if((distance(o1.position,o2.position) < o1.radius+o2.radius)){
        return true;
    }
    return false;
}

export {compareHitbox};