// non alphabatical order
let places : string[] =['makkah','italy','egypt','canada','russia'];
// print array in its original order
console.log('original ' + places);
// without modifying print copy
console.log('copy ' + [...places].sort());
//array is still in original order
console.log('original ' + places);
//print reverse order
console.log('copy ' + [...places].sort().reverse());
//original order print again
console.log('original ' + places);
//reverse the order to show that order has changed
console.log('original ' + places.reverse());
//reverse the order to show back to original order
console.log('original ' + places.reverse());
//sort array in alphabatical order show order has changed
console.log('original ' + places.sort());
//change array stored in reverse order showw its order has changed
console.log('original ' + places.sort().reverse());
