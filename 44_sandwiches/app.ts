 //write function that accept array
 function order_sandwich(sandwichName : string[]){
    sandwichName.forEach((sandwichNames) =>{
    console.log(sandwichNames);
    });    
 }
 // call the function with different number of arguments
 order_sandwich(['Italian ' , 'Russian ' , 'Tomato ' , 'Cheese ']);
 order_sandwich(['Indian ' , 'spicy ' , 'potato cheese ' , 'chicken ' ]);
 order_sandwich(['club ' , 'myonnaise ' ,'Tomato ' ,'spicychicken ']);