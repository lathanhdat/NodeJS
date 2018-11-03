var rect = require('./rectangle');


function solveRect(l,b)
{
    console.log("Solving for rectangle with l = " + l + " and b = " + b);
    rect(l,b,(err,rectangle) =>
    {
        if(err)
        {
            console.log("ERROR: ", err.message);
        }
        else
        {
            console.log("The area = " + rectangle.area(l,b));
            console.log("The perimeter = " + rectangle.perimeter(l,b));
        }
    });
    console.log("Statement after the call solveRect");
}
solveRect(2,4);
solveRect(3,5);
solveRect(-1,3);