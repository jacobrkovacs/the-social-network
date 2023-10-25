const connection = require('../config/connection');
const { User, Thought } = require('../models');
const userData = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('Connected');

    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
        await connection.dropCollection('users');
    }
    await User.collection.insertMany(userData);
    console.table(userData);
    console.log('Seeding Complete');
    process.exit(0);
});
