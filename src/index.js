const os = require('os');
const moment = require('moment');
const fs = require('fs');
const path = require('path');

const getAge = (dayOfBirth) => {
    return moment().diff(dayOfBirth, 'years');
}

const dayOfBirth = '1994-03-07';
const speed = process.env.SPEED || 75;
let text = fs.readFileSync(path.resolve(__dirname, '..', 'resources', 'text.txt'), 'utf-8').replace('{age}', getAge(dayOfBirth)); 

console.clear();

const interval = setInterval(() => {
    if (text.length > 0) {
        process.stdout.write(text.charAt(0));

        text = text.substr(1);
    } else {
        process.stdout.write(os.EOL);

        clearInterval(interval);
    }
}, speed);
