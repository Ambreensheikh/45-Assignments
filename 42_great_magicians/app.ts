// copy of exercise 40 
//make a function called show_magicians
//function show_magicians(magicians : string[]){
  // magicians.forEach((magician) =>{
      // console.log(magician);
   // }); 
  // } 
   // Array of magician names
   let magicianNames : string[] = ["Baba", "Aamil","Peer","Guru"];
   //calling the function to show magician names
   //show_magicians(magicianNames);
   function make_great(magicians : string[]){
   magicians.forEach(( magician) =>{
      console.log(`The great magician , ${ magician}`);
   });
   } 
   make_great(magicianNames);   
   