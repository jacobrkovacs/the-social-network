const userData = [
    {
        fname: 'Jacob',
        lname: 'Kovacs',
        username: 'jacobkovacs',
        email: 'jacobkovacs@gmail.com',
        thoughts: [],
        friends: ['chuckfinley']
    },
    {
        fname: 'Charles',
        lname: 'Finley',
        username: 'chuckfinley',
        email: 'chuckfinley@gmail.com',
        thoughts: [],
        friends: ['jacobkovacs', 'bobbyp']
    },
    {
        fname: 'Robert',
        lname: 'Par',
        username: 'bobbyp',
        email: 'robertpar@gmail.com',
        thoughts: [],
        friends: ['chuckfinley', 'jacobkovacs']
    },
];

const thoughtData = [
    {
        thoughtText: "Here's a thought...",
        username: 'jacobkovacs'
    }
]

module.exports = { userData, thoughtData }