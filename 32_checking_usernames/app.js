"use strict";
//create a current program
let current_users = ["Admin", "ali", "hashir", "Imran", "Hamza"];
//list a new user_name list
let new_users = ["Umar", "Hadi", "Asad", "Azan", "ali", "hashir", "Haider"];
//function apply .forEach
new_users.forEach(new_users => {
    new_users = new_users.toLowerCase();
    //function apply for .Some
    let users_name = current_users.some(current_users => current_users.toLocaleLowerCase() === new_users);
    //apply conditions 
    if (users_name) {
        console.log(`${new_users} need to new users name because it is already taken`);
    }
    else {
        console.log(`${new_users} is the new member added`);
        current_users.push(new_users);
        console.log(current_users);
    }
});
