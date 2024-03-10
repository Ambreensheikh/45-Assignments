"use strict";
let personName = ("Hashir");
// lower_case
console.log(personName.toLowerCase());
// upper_case
console.log(personName.toUpperCase());
// title_case
console.log(personName.replace(/\b\w/g, (char) => char.toUpperCase()));
