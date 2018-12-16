const fs = require('fs');
fs.readFile(__dirname + '/file.txt', (err, data) => {
    if (!err) {
        console.log(data.toString());
    }
});
console.log('hello world')
