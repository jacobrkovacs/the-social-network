const connection = require('../config/connection');
const { User, Thought } = require('../models');
const {userData, thoughtData}= require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('Connected');

    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
        await connection.dropCollection('users');
    }
    await User.collection.insertMany(userData);
    console.table(userData);
    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts'}).toArray();
    if (thoughtCheck.length) {
        await connection.dropCollection('thoughts');
    }
    await Thought.collection.insertMany(thoughtData);
    console.table(thoughtData)
    console.log('Seeding Complete');
    process.exit(0);
});
