'use strict';

const sentences = [
    {subject: 'JavaScript', verb: 'is', object: 'great'},
    {subject: 'Elephants', verb: 'are', object: 'cool'}
];

// Example of pbject destructuring
function say ({subject, verb, object}) {
    console.log(`${subject} ${verb} ${object}`);
};

// Iterate through the sentences and say 'em
for(let s of sentences) {
    say(s);
}
