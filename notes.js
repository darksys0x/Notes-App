const fs = require ('fs');


const gtFun = function(){
    console.log("testApp");

}
const addNote = function(title,body){
    const notes = loadNote();
   // console.log(notes)
    notes.push({
        title : title,
        body : body
    })
    
}






//load exist note
const loadNote = function(){
      try{
          const dataBuffer = fs.readfilesync('notes.json');
          const DataJson = dataBuffer.toString();
          return JSON.parse(DataJson);
      }catch (e){
          return [];
      }
}



module.exports = {
    gtFun : gtFun,
    addNote : addNote
}

