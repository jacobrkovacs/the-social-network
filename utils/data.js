const userData = [
    {
        fname: 'Jacob',
        lname: 'Kovacs',
        username: 'jacobkovacs',
        email: 'jacobkovacs@gmail.com',
        friends: ['chuckfinley']
    },
    {
        fname: 'Charles',
        lname: 'Finley',
        username: 'chuckfinley',
        email: 'chuckfinley@gmail.com',
        friends: ['jacobkovacs', 'bobbyp']
    },
    {
        fname: 'Robert',
        lname: 'Par',
        username: 'bobbyp',
        email: 'robertpar@gmail.com',
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