test('check mock function instances', () => {
    const nameMockFn = jest.fn(function (carName) {
        this.fruitName = carName;
    });
    const a = new nameMockFn('Toyota');
    const obj1 = new nameMockFn('Tata');
    const obj2 = new nameMockFn('Honda');

    console.log(nameMockFn.mock.instances);
});

test('check mock function bounds', () => {
    const nameMockFn = jest.fn(function (carId) {
        console.log(this.carName, carId);
    });

    const car1 = { carName: 'Toyota' };
    const car2 = { carName: 'Tata' };
    const car3 = { carName: 'Honda' };

    const bound1 = nameMockFn.bind(car1, 1);
    const bound2 = nameMockFn.bind(car2, 2);
    const bound3 = nameMockFn.bind(car3, 3);

    bound1();
    bound2();
    bound3();

    console.log('Bound Contexts');
    console.log(nameMockFn.mock.contexts);
});
