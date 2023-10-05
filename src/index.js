const { sayHello } = require('./assignment1/assignment1.js');
const { add } = require('./assignment2/assignment2.js');
const _ = require('lodash');

const app = () => {
    // Make your changes from Below

    console.log(sayHello('Baki Hanma'));
    console.log(add(1, 2));

    const object = {
        brand:'Toyota',
        color: 'Red',
        model: '2010',
        name: 'Camry',
    };

    _.forEach(object,(ele)=>{
        console.log(ele);
    });

    // Do not make any changes below
};

// IIFE function, Never Make any changes below
(function () {
    console.warn('JS Execution Started');
    app();
    console.warn('JS Execution Complete');
})();
