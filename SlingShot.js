class SlingShot
{
    
    constructor(bodyA, pointB)
    
    {
        var slingshotOptions = 
        {
            
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        
        }

        this.pointB = pointB
        this.sling = Constraint.create(slingshotOptions);
        World.add(world, this.sling);
    }

    fly()
    {
        
        this.sling.bodyA = null;
    
    }

    attach(body)
    {

        this.sling.bodyA = body;

    }

    display()
    {
        if(this.sling.bodyA)
        {

        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight(4);
        stroke("orange");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();

        }
    }

}