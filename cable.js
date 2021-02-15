class Cable {
constructor(bodyA,bodyB){
var options={
bodyA:bodyA, bodyB:bodyB, stiffness:0.00001, length:15
}
this.cable=Matter.Constraint.create(options)
Matter.World.add(world,this.cable)
}
display(){
strokeWeight(2)
var A = this.cable.bodyA.position;
var B = this.cable.bodyB.position;
line(A.x,A.y,B.x,B.y);
}
}