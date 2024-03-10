"use strict";
let Guest_list = ["Unaiza", "Hashir", "Muhammad", "Dua"]; //one new guest add to list at 0 length
// one guest not attend the dinner so we invite another
let Guest_absent = "Unaiza";
let new_guest = 'Sir Zia';
Guest_list[0] = new_guest;
for (let i = 0; i < Guest_list.length; i++) {
    console.log("dear Sir/Madam " + Guest_list[i], ",\n\nWe glad to invite you on dinner tomorrow.As we have a big dinner table for our gathering.\n\n Thank you!\n");
}
console.log(`Mrs .${Guest_absent} will not attend the dinner.`);
// as we have big dinner table so we invite three more people
Guest_list.unshift("Sir Hamza");
Guest_list.splice(2, 0, " Sir Ameen Alam");
Guest_list.push("Sir Imran");
for (let i = 0; i < Guest_list.length; i++) {
    console.log("dear Sir/Madam " + Guest_list[i], ",\n\nWe glad to invite you on dinner tomorrow.As we have a big dinner table for our gathering.\n\n Thank you!\n");
}
