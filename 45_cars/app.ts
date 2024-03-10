

//make object
interface car{
manufacturer : string;
model : string;
[extraKey    : string]: any;
}
// function with optional character
function create_car(manufacturer:string , model:string ,optional:Record<string,any>){
    return  { manufacturer,
             model,
             ...optional
}
}
const car = create_car("Toyota", "Yaris" , {color : "Black" , year : 2024});
console.log(car);