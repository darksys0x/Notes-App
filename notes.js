const fs = require ('fs');
const chalk = require('chalk');



const gtFun = function(){
    console.log("testApp");

}
// let mm = [];
const addNote = function(title,body){
    const notes = loadNote();
   // console.log(notes)

   const duplicate = notes.filter(note => {note.title === title;})


   //check if you have duplicate title ??
   if(duplicate.length === 0){
    notes.push({
        title : title,
        body : body
    })
 

     saveNote(notes);
     console.log(chalk.green.inverse("Greet is DONE !!"));

   }else{
       console.log(chalk.red.inverse("title note is token !!"));
   }
}
// console.log(mm)

//remove
const removNote = title =>{
    const getNotes = loadNote();
    const cheakN = getNotes.filter(note => {
        return note.title !== title;
    })

        if(cheakN.length < getNotes.length){
            console.log(chalk.green.bold.inverse('Note removed !'));
            saveNote(cheakN);

        }else{
            console.log(chalk.red.bold.inverse("not Note found !!"))
        }


    
}

//save note 
const saveNote = function(notes){
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJson);
}






//load exist note
const loadNote = function(){
      try{
          const dataBuffer = fs.readFileSync('notes.json');
          const DataJson = dataBuffer.toString();
        //   console.log(DataJson);
          return JSON.parse(DataJson);
      }catch (e){
          return [];//when the notes is empety
      }
}
counter = 0;
const listNotes = function(title){
    const notes = loadNote();
    const printout = notes.forEach(element => {
        counter++
        console.log(`${counter}: ${chalk.green(element.title)}`);
    });
    if(counter >1){
        console.log("no list");
    }
}

//readNote
const readNote = title => {
    const notes = loadNote();
    const note = notes.find(element => element.title === title);
    if(!note){
        console.log(chalk.red.inverse('note not found'));
    }else{
        console.log(chalk.green.inverse(note.title));
        console.log(note.body);
    }
}


module.exports = {
    gtFun : gtFun,
    addNote : addNote,
    removNote : removNote,
    listNotes : listNotes,
    readNote : readNote
}

