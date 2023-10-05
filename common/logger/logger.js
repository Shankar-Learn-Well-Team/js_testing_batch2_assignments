const winston = require('winston');

// Create a custom log format with ANSI escape codes for color-coding based on log levels
const customFormat = winston.format.printf(({ level, message }) => {
    let colorCode;
    switch (level) {
        case 'info':
            // colorCode = '\x1b[91;1m'; // Bright Red (bold)
            // colorCode = '\x1b[36m'; // Cyan
            // colorCode = '\x1b[35m'; // Magenta
            colorCode = '\x1b[32m'; // Green
            break;
        case 'debug':
            colorCode = '\x1b[97m'; // White
            break;
        case 'warn':
            colorCode = '\x1b[93m'; // Bright Yellow
            break;
        case 'error':
            colorCode = '\x1b[31m'; // Red
            break;
        default:
            colorCode = '\x1b[0m'; // Reset (white)
            break;
    }

    const resetColor = '\x1b[0m'; // Reset ANSI color codes
    return colorCode + `${message}` + resetColor;
});

// Create a Winston logger instance
const logger = winston.createLogger({
    level: 'info', // Change the default log level here if needed
    format: winston.format.combine(winston.format.timestamp(), customFormat),
    transports: [
        new winston.transports.Console(),
        // Add more transports (e.g., file transport) if needed
    ],
});

module.exports = logger;
