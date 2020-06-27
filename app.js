const r = require("./notes.js");
const chalk = require("chalk");
const yargs = require("yargs");


//print deatiel process 
//console.log(process.argv);

//change the version yargs
yargs.version("1.1.0")


//yargs output 


const cheackIt = chalk.green.bold.inverse("Success");



//

//1 //add
yargs.command({
    command : "add",
    describe : "add new note",
    handler : function(){
        console.log("added your note")
    }
});
console.log(yargs.argv);




























//------------------------

// console.log(cheackIt);
// console.log(chalk.blue.inverse("process"));

// console.log(process.argv[2]);
// if
// const command = process.argv[2];
// if(command === "add new notes "){
//     //console.log("add");
// }

// console.log(process.argv)
