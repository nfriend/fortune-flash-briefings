#!/usr/bin/env node

const fs = require('fs');

const fortunes = [
    'On Tuesday, you will eat your second favorite sandwich at 11:47 AM.',
    'In two days, you will lose your car keys, but find them a few minutes later between the couch cushions.',
    'You will get stuck behind a red mustang on your way to work today.',
    'You will sneeze three times today.',
    'On Monday, you will see a news story about a peach tree.',
    'The power will go out for a couple of minutes next Tuesday around 2:35 PM.',
    'Next Wednesday, you will burn your mouth eating pizza for lunch.',
    'This weekend, you will see a beehive.',
    'You will see a fox and a baby pig tomorrow.',
    'Today, you will pass a car with the same license plate as you except for one letter.',
    'Next week the battery in your wireless key opener will die.',
    'You will eat broccoli next Thursday.',
    'Your next credit card bill will be divisible by 100.',
    'You will trip over a dog two days from now.',
    'You will almost run out of gas on Sunday.',
    'You will be 3 minutes late to work on Tuesday.',
    'Next year you will no longer be using this flash briefing.',
    'Tomorrow you will ask Alexa to read you your flash briefing.',
    'On Friday you will watch your third favorite movie',
    'Next weekend you will sleep until 10:34 AM.',
    'You will wake up at exactly the same time for the next three days.',
    'Your phone will be at 27% battery when you plug it in tonight.',
    'Your front passenger tire will be slightly low when you get in your car tomorrow morning.',
    'You will chew your last piece of gum on Thursday.',
    'You will forget to buy 2 items during your next grocery shopping trip.',
    'You will drink some flat pop this afternoon.',
    'You will eat some cold pizza today',
    "Your car's gas tank will be 25% full tomorrow morning.",
    'Your left ear will feel plugged when you wake up tomorrow morning.',
    'You will hear your favorite song on the radio tomorrow.',
    'Someone you knew in high school will announce that they are pregnant on Facebook today.',
    'The light bulb in your bedroom will burn out on Thursday.',
    'Your phone will freeze and have to be restarted next Sunday.',
    'You will kick a basketball sometime this week.',
    'You will accidentally spill some water on yourself tomorrow around noon.',
    'You will walk down a street named "Mallard Street" tomorrow.',
    'You will stub your toe tomorrow night.',
    'This weekend, you will accidentally leave your milk on the counter overnight and have to throw it out',
    'You will dial a wrong number today',
    'You will accidentally reply all to a big email chain tomorrow',
    // prettier-ignore
    `You will find ${Math.round(Math.random() * 30 + 1)} dollars in your pocket on Wednesday.`,
    'You will receive a wrong number call this afternoon.',
    'You will wear your second favorite shirt tomorrow.',
    'You will buy something that costs 4 dollars and 31 cents tomorrow.',
    'You will receive a funny email tomorrow around 3:15 PM.',
    "Right after hearing this fortune, you'll be so entertained that you'll look up the developer of this flash briefing and enable all his other Alexa skills.",
    'You will talk on the phone with someone from a different state this afternoon.',
    'You will accidentally send an email before you finish writing it tomorrow.',
];

const names = [
    'Miguel',
    'Martha',
    'John',
    'Philip',
    'Susan',
    'Beth',
    'Joe',
    'Jay',
    'Gloria',
    'Phil',
    'Claire',
    'Luke',
    'Manny',
    'Joe',
    'Mitchell',
    'Cameron',
    'Jonathan',
    'Justin',
    'Kyle',
    'Sarah',
    'Steve',
    'Amy',
    'Hannah',
    'Matt',
    'Stuart',
    'Derek',
    'Mike',
    'Roger',
    'Brady',
    'Braden',
    'Alicia',
    'Allison',
    'Evelyn',
    'Philip',
    'Alex',
];

const days = [
    'on Monday',
    'on Tuesday',
    'on Wednesday',
    'on Thursday',
    'on Friday',
    'on Saturday',
    'on Sunday',
    'next Monday',
    'next Tuesday',
    'next Wednesday',
    'next Thursday',
    'next Friday',
    'next Saturday',
    'next Sunday',
    'on Christmas Day',
    'on the next major holiday',
    'on your birthday',
    'this weekend',
    'next weekend',
    'this afternoon',
    'this evening',
    'tomorrow morning',
    'tomorrow',
    'tomorrow afternoon',
];

for (var i = 0; i < 10; i++) {
    const name = names[Math.floor(Math.random() * names.length)];
    const when = days[Math.floor(Math.random() * days.length)];
    fortunes.push(`You will meet someone named ${name} ${when}`);
}

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

    console.log('oddly-specific-fortunes.json was successfully updated!');
});

// from https://stackoverflow.com/a/2117523/1063392
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (Math.random() * 16) | 0,
            v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
