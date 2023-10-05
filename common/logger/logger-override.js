const logger = require('./logger'); // Import your Winston logger

// Override console.log
console.log = (...args) => {
    logger.info(...args);
};

// Override console.debug
console.debug = (...args) => {
    logger.debug(...args);
};

// Override console.warn
console.warn = (...args) => {
    logger.warn(...args);
};

// Override console.error
console.error = (...args) => {
    logger.error(...args);
};
