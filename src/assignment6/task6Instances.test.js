test('check mock function instances', () => {
    const studentFn = jest.fn(function (studentName, rollno) {
        this.studentName = studentName;
        this.rollno = rollno;
    });
    const a = new studentFn('Harry', 9);
    const obj1 = new studentFn('Alex', 7);
    const obj2 = new studentFn('Mark', 3);

    console.log(studentFn.mock.instances);
});

test('check mock function bounds', () => {
    const studentFn = jest.fn(function (age) {
        console.log(this.studentName, this.rollno, age);
    });

    const person1 = { studentName: 'Drake', rollno: 1 };
    const person2 = { studentName: 'Peter', rollno: 2 };
    const person3 = { studentName: 'Max', rollno: 3 };

    const bound1 = studentFn.bind(person1, 21);
    const bound2 = studentFn.bind(person2, 20);
    const bound3 = studentFn.bind(person3, 22);

    bound1();
    bound2();
    bound3();

    console.log('Bound Contexts');
    console.log(studentFn.mock.contexts);
});
