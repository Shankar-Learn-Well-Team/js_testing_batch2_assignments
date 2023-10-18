test('check mock function instances', () => {
    const nameMockFn = jest.fn(function (fruitName) {
        this.fruitName = fruitName;
    });
    const a = new nameMockFn('Appla');
    const obj1 = new nameMockFn('Banana');
    const obj2 = new nameMockFn('Mango');

    console.log(nameMockFn.mock.instances);
});

test('check mock function bounds', () => {
    const nameMockFn = jest.fn(function (fruitId) {
        console.log(this.fruitName, fruitId);
    });

    const fruit1 = { fruitName: 'Mango' };
    const fruit2 = { fruitName: 'Banana' };
    const fruit3 = { fruitName: 'Apple' };

    const bound1 = nameMockFn.bind(fruit1, 1);
    const bound2 = nameMockFn.bind(fruit2, 2);
    const bound3 = nameMockFn.bind(fruit3, 3);

    bound1();
    bound2();
    bound3();

    console.log('Bound Contexts');
    console.log(nameMockFn.mock.contexts);
});
