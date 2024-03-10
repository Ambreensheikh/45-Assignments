"use strict";
//list of users is not empty
let users_name = ["Admin", "Ali", "Hashir", "Imran", "Hamza"];
//list of user_names is empty
//users_name = [];
console.log(users_name);
//print message to find some users
if (users_name.length > 0) {
    for (let i = 0; i < users_name.length; i++) {
        if (users_name[i] == "Admin") {
            console.log(`Hello ${users_name[i]},  would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${users_name[i]}, Thank you for logging in again .`);
        }
    }
}
else {
    console.log(`We need to find some users.`);
}
//remove all of users_names to print correct message
