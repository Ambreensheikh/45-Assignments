"use strict";
let Guest_list = ["Unaiza", "Hashir", "Muhammad", "Dua"]; //one new guest add to list at 0 length
// one guest not attend the dinner so we invite another
let Guest_absent = "Unaiza";
let new_guest = 'Sir Zia';
Guest_list[0] = new_guest;
console.log(`Sis/Madam .${Guest_absent} will not attend the dinner.`);
// as we have big dinner table so we invite three more people
Guest_list.unshift("Sir Hamza");
Guest_list.splice(2, 0, " Sir Ameen Alam");
Guest_list.push("Sir Imran");
for (let i = 0; i < Guest_list.length; i++) {
    console.log("dear Sir/Madam " + Guest_list[i], ",\n\nWe glad to invite you on dinner tomorrow.As we have a big dinner table for our gathering.\n\n Thank you!\n");
}
//As we cannot get the big table for dinner so only 2 guests will be invited
console.log("sorry, we have not get big table so we cannot invite you on dinner.");
while (Guest_list.length > 2) {
    let remove_Guest = Guest_list.pop();
    console.log(`Sorry Sir/Madam, ${remove_Guest}, we are not invite you on dinner`);
    for (let i = 0; i < Guest_list.length; i++) {
        console.log("dear Sir/Madam " + Guest_list[i], ",\n\n.you are still invite on dinner.\n\n Thank you!\n");
    }
}
Guest_list.splice(0, 2);
let remove_list = Guest_list.pop();
console.log(`Sorry Sir/Madam, ${Guest_list}you are not invited on dinner. `);
for (let i = 0; i < Guest_list.length; i++) {
    console.log("dear Sir/Madam " + Guest_list[i], ",\n\nWe glad to invite you on dinner tomorrow.As we have a big dinner table for our gathering.\n\n Thank you!\n");
}
Guest_list.splice(0, 2);
console.log(Guest_list);
