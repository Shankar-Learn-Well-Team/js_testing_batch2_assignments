function iterateCarObject(car) {
    for (var key in car) {
        if (car.hasOwnProperty(key)) {
            console.log(key + ": " + car[key]);
            }
   }
}
var car = { make: 'Toyota', model: 'Camry', year: 2022 };
iterateCarObject(car);
