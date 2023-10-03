import assignment1 from './assignment1/assignment1.js';

const app = () => {
    // Make your changes from Below

    assignment1.sayHello('Baki Hanma');

    // Do not make any changes below
};

// IIFE function, Never Make any changes below
(function () {
    console.warn('JS Execution Started');
    app();
    console.warn('JS Execution Complete');
})();
