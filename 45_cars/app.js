"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function create_car(manufacturer, model, optional) {
    return Object.assign({ manufacturer,
        model }, optional);
}
const car = create_car("Toyota", "Yaris", { color: "Black", year: 2024 });
console.log(car);
