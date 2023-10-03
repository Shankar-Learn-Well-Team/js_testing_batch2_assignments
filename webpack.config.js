const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const dotenv = require('dotenv').config({ path: path.join(__dirname, '.env') });
const { execSync } = require('child_process');
require('./common/logger/logger-override'); // Import the override file

// Function to run Jest tests synchronously
function runTests() {
    try {
        execSync('npx jest --no-cache');
        console.log('Jest tests passed. Creating the bundle...');
        return true;
    } catch (error) {
        console.error('Jest tests failed. Bundle creation aborted.');
        return false;
    }
}

module.exports = async (env, argv) => {
    const testsPassed = runTests();

    if (!testsPassed) {
        // Exit Webpack build process if tests failed
        process.exit(1);
    }

    return {
        mode: 'development',
        target: 'node',
        entry: {
            index: './src/index.js', // Your application's entry point
            // tests: './src/**/*.{test,spec}.js', // Entry for your test suite
        },
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist'),
            // Output as CommonJS module, expected by Jest
            libraryTarget: 'commonjs2',
        },
        resolve: {
            extensions: ['.js', '.mjs', '.json'], // Include '.mjs' as an allowed file extension
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/, // Match .js and .jsx files
                    loader: 'babel-loader', // Use Babel for JavaScript transpilation
                    exclude: /node_modules/,
                },
            ],
        },
        plugins: [
            new CleanWebpackPlugin(),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(dotenv.parsed.NODE_ENV),
            }),
        ],
        devtool: 'source-map',
        // watch: true,
    };
};
