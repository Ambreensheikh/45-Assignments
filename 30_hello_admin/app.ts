//make a Array of five users_names
let users_name : string[] = ["Admin","Ali", "Hashir", "Imran","Hamza"]
//write Greeting statements
for(let i = 0; i< users_name.length; i++){
    if(users_name[i] =="Admin"){
console.log(`Hello ${users_name[i]},  would you like to see a status report?`)
    }else{
        console.log(`Hello ${users_name[i]}, Thank you for logging in again .`)    
    }
    
}