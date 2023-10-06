// **Update Object Property:**

//     - **Use-case:** Change the model property of the car object to a new value.
//         - **Sample Inputs:** `{ make: 'Toyota', model: 'Camry', year: 2022 }`
//         - **Sample Output:** `{ make: 'Toyota', model: 'Corolla', year: 2022 }`
//         - **Operation:** Object property update.

            const car ={
                make:"Toyota",
                model:"Camry",
                year:2022
            };

        car.model = 'Corolla';

        console.log(car);

        