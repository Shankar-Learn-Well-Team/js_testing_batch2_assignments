// assignment 6 
// Task 1 - instances.test.js
test('check mock function instances', () => {
    const nameMockFn = jest.fn(function (countryName, currencyType, capital) {
        this.countryName = countryName;
        this.currencyType = currencyType;
        this.capital = capital;
    });
    const a = new nameMockFn('India', 'Rupees', 'Delhi');
    const obj1 = new nameMockFn('England', 'Dollar', 'London');
    const obj2 = new nameMockFn('Switzerland', 'Swiss Dollar', "Zurich");

    console.log(nameMockFn.mock.instances);
});

test('check mock function bounds', () => {
    const nameMockFn = jest.fn(function (year) {
        console.log(this.carName, this.carPrice, year);
    });

    const car1 = { carName: 'Suzuki', carPrice: '5L' };
    const car2 = { carName: 'Honda', carPrice: '10L' };
    const car3 = { carName: 'Skoda', carPrice: '20L' };

    const bound1 = nameMockFn.bind(car1, 1);
    const bound2 = nameMockFn.bind(car2, 2);
    const bound3 = nameMockFn.bind(car3, 3);

    bound1();
    bound2();
    bound3();

    console.log('Bound Contexts');
    console.log(nameMockFn.mock.contexts);
});