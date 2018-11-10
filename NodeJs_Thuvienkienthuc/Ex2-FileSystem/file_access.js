var ex2fs = require("fs");


//Open file
ex2fs.open("data.txt","r+",function(err,file){
    if(err)
    {
        console.log("Can't open !");
        return;
    }
    console.log("Successfully opend !")
})

// //Read file
// var ex2data = ex2fs.readFileSync("data.txt")
// console.log(ex2data.toString());

// Write file
// ex2fs.writeFile("data.txt","New line",function(err){
//   if(err)
//   {
//         console.log("Can't write");
//   }  
//   else
//   {
//     ex2fs.readFile("data.txt",function(err,data){
//         if(err)
//         {
//             console.log("Can't read");
//         }
//         else
//         {
//             console.log(data.toString());
//         }
        
//     })
//   }
// }
// )

//Make new folder
ex2fs.mkdir("NewJSFolder",function(err){
    if(err)
    {
        console.log("Make directory Error!");
    }
    else
    {
        console.log("Maked a new Foler!");
    }
})