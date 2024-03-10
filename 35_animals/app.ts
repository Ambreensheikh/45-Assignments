//print any three animals name with same characterstics
let animalsName = ["goat","cow","buffalow","sheep"];
for(let i of animalsName){
    console.log(i);
}
//modify programme to print a statement about each animal
for (let i of animalsName){
    console.log(`${i} , is the best pet animal .`);
}
//add a line at the end stating common feature
console.log(` "all animals ${animalsName[0]} ,${animalsName[1]} ,${animalsName[2]}
${animalsName[3]} gives milk good for health." `);
