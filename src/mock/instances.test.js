test('check mock function instances', () => {
    const nameMockFn = jest.fn(function (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    });
    const a = new nameMockFn('John', 'Doe');
    const obj1 = new nameMockFn('Jane', 'Doe');
    const obj2 = new nameMockFn('Garrison', 'Smith');

    console.log(nameMockFn.mock.instances);
});

test('check mock function bounds', () => {
    const nameMockFn = jest.fn(function (personId) {
        console.log(this.firstName, this.lastName, personId);
    });

    const person1 = { firstName: 'Drake', lastName: 'KB' };
    const person2 = { firstName: 'Will', lastName: 'Johnson' };
    const person3 = { firstName: 'Peter', lastName: 'Max' };

    const bound1 = nameMockFn.bind(person1, 1);
    const bound2 = nameMockFn.bind(person2, 2);
    const bound3 = nameMockFn.bind(person3, 3);

    bound1();
    bound2();
    bound3();

    console.log('Bound Contexts');
    console.log(nameMockFn.mock.contexts);
});
