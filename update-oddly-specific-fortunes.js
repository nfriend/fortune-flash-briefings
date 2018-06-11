#!/usr/bin/env nodejs

const fs = require('fs');

const fortunes = [
    'On Tuesday, you will eat your second favorite sandwich at 11:47 AM.',
    'In two days, you will lose your car keys, but find them a few minutes later between the couch cushions.',
    'You will get stuck behind a red mustang on your way to work today.',
    'You will sneeze three times today.',
    'On Monday, you will see a news story about a peach tree.',
    'The power will go out for a couple of minutes next Tuesday around 2:35 PM.',
];

const path = '/var/www/html/flash-briefings/oddly-specific-fortunes.json';
const now = new Date();
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
const dateString = months[now.getMonth()] + ' ' + now.getDate();

const skillData = {
    uid: `urn:uuid:${uuidv4()}`,
    updateDate: now,
    titleText: `Fortune for ${dateString}`,
    mainText: fortunes[Math.floor(Math.random() * fortunes.length)],
};

fs.writeFile(path, JSON.stringify(skillData, null, 4), err => {
    if (err) {
        return console.log(err);
    }

    console.log('fortune.json was successfully updated!');
});

// from https://stackoverflow.com/a/2117523/1063392
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (Math.random() * 16) | 0,
            v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
