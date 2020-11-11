class Chain{
constructor(bodyA,bodyB){
    var options={
        bodyA: bodyA,
        bodyB: bodyB,
        length:10,
        stiffness: 0.04
    }
 this.chain= Constraint.create(options);
    World.add(world,this.chain);


}


display(){
    line(bird.body.position.x,bird.body.position.y,constrainedLog.body.position.x,constrainedLog.body.position.y)



}

}
