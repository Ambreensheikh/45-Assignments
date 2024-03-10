"use strict";
// Array of magician names unchanged
let magicianNames = ["Baba", "Aamil", "Peer", "Guru"];
// make the great magician  
function make_great(magicians) {
    magicians.forEach((magician) => {
        console.log(`The great magician , ${magician}`);
    });
}
make_great(magicianNames);
//make a function called show_magicians original array unchanged
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
//calling the function to show magician names
show_magicians(magicianNames);
