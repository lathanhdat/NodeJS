module.exports = (x,y,callback) =>
{
    if (x <= 0 || y <= 0)
    {
        setTimeout(() => callback(new Error ("Dimension < 0"),null),2000);
        //setTimeout have 1st parameter is function and 2nd paramter is timeout
        //Call function callback with 2 paramter: error and return value.
    }
    else
    {
        setTimeout(() => callback(null,
            {
                perimeter: (x,y) => 2*(x+y),
                area: (x,y) => x*y
            }),2000);
        //Call function callback with 2 parameter: 1st error = null and return object with 2 function.
    }
    // => means return : return callback function.
}


