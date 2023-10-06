const url = require('url');

const myUrl = url.parse(
    'http://mywebsite.com/login.html/    type="na"?id=100&status=active',
    true,
);

console.log(myUrl);

// const myUrlObject = myUrl.format(myUrl);

// console.log(myUrlObject);

const myUrl2 = new URL(
    'http://mywebsite.com/hello.html/     type="na"?id=100&status=active',
);

myUrl2.

console.log(myUrl2);
