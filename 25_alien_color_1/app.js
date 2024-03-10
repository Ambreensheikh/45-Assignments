"use strict";
//create a variable
let alien_color = 'green';
//if statement with message
if (alien_color == 'green') {
    console.log("the player just earns 5 points");
}
// fail version
alien_color = 'yellow';
if (alien_color == 'green') {
    console.log('the player just earns 5 points');
}
