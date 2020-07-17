
const chalk = require("chalk");
const yargs = require("yargs");
const notes = require ("./notes.js");
const { string } = require("yargs");




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
    builder : {
            title : {
                describe : "if you want to add new note, you have use title of note",
                demandOptipn : true,
                type : true,
            },
            body : {
                describe : "add contain of note ",
                demandOptipn : true,
                type : 'string' 
            },

    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    
    }
});

//2 REMOVE 
yargs.command({
    command : 'remove',
    describe : 'delete any note exist',
    builder : {
        title :{
           
            describe : 'remove note',
            demandOptipn : true,
            type : 'string',
        },
    },
    handler(argv){
        return notes.removNote(argv.title);
    }
    
})

yargs.command({
    command : 'list',
    describe : "list notes",
    handler(argv){
        notes.listNotes(argv.title);
    }
})

yargs.command({
    command : 'read',
    describe : 'read your note',
    builder : {
        title : {
            describe : 'read all note your chooise',
            demandOptipn: true,
            type : 'string'
        }
    },
    handler : (argv)=>{
        notes.readNote(argv.title);
    }
})
yargs.parse();


//**** */ console.log(process.argv) *****
























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
