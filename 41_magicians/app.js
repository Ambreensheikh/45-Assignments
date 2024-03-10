"use strict";
//make a function called show_magicians
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
// Array of magician names
let magicianNames = ["Baba", "Aamil", "Peer", "Guru"];
//calling the function to show magician names
show_magicians(magicianNames);
