"use strict";
let Guest_list = ["Unaiza", "Hashir", "Muhammad"];
for (let i = 0; i < Guest_list.length; i++) {
    console.log("dear Sir/Madam " + Guest_list[i], ",\n\nWe glad to invite you on dinner tomorrow.\n\n Thank you");
}
// one guest not attend the dinner
let Guest_absent = "Hashir";
let new_guest = 'Sir Zia';
Guest_list[1] = new_guest;
for (let i = 0; i < Guest_list.length; i++) {
    console.log("dear Sir/Madam " + Guest_list[i], ",\n\nWe glad to invite you on dinner tomorrow.\n\n Thank you");
}
console.log(`Mr .${Guest_absent}will not attend the dinner.`);
