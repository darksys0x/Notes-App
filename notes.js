const fs = require ('fs');
const chalk = require('chalk');



const gtFun = function(){
    console.log("testApp");

}
// let mm = [];
const addNote = function(title,body){
    const notes = loadNote();
   // console.log(notes)

   const duplicate = notes.filter(note => {
       return note.title === title;
   })


   //check if you have duplicate title ??
   if(duplicate.length === 0){
    notes.push({
        title : title,
        body : body
    })
    console.log(chalk.green.inverse("Greet is DONE !!"));

     saveNote(notes);

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
    saveNote(cheakN);
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
          console.log(DataJson);
          return JSON.parse(DataJson);
      }catch (e){
          return [];//when the notes is empety
      }
}



module.exports = {
    gtFun : gtFun,
    addNote : addNote,
    removNote : removNote
}

