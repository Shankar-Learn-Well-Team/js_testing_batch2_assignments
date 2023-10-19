// test('check mock function instances', () => {
//     const markMockFn = jest.fn(function (subjectName, Marks) {
//         this.subjectName = subjectName;
//         this.Marks = Marks;
//     });
//     const a = new markMockFn('Maths', 80);
//     const obj1 = new markMockFn('Science', 55);
//     const obj2 = new markMockFn('Social Science', 85);

//     console.log(markMockFn.mock.instances);
// });

test('check mock function bounds', () => {
    const nameMockFn = jest.fn(function (grade) {
        console.log(this.subjectName, this.Marks, grade);
    });

    const std1 = { subjectName: 'Maths', Marks: 90 };
    const std2 = { subjectName: 'Science', Marks: 55 };
    const std3 = { subjectName: 'Social Science', Marks: 60 };

    const bound1 = nameMockFn.bind(std1, 1);
    const bound2 = nameMockFn.bind(std2, 2);
    const bound3 = nameMockFn.bind(std3, 3);

    bound1();
    bound2();
    bound3();

    console.log('Bound Contexts');
    console.log(nameMockFn.mock.contexts);
});
