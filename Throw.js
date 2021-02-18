class Throw{
    constructor(body, anchor){
        var options = {
            bodyA: body,
            pointB: anchor,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=anchor;
        this.bodyA=body
        this.Throw = Constraint.create(options);
        World.add(world, this.Throw);
    }

    fly(){
        this.Throw.bodyA=null;
    }

    attach(body){
        this.Throw.bodyA=body;
    }

    display(){
        if(this.Throw.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(9);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
    }
    
}