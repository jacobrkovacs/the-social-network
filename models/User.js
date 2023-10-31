const {Schema, model} = require('mongoose').set('strictPopulate', false);
const validator = require('validator');

const userSchema = new Schema(
    {
        fname: {
            type: String,
            required: true
        },
        lname: {
            type: String,
            required: true
        },
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,

        },
        email: {
            type: String,
            unique: true,
            required: true,
            validate: [validator.isEmail, 'Invalid Email']
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            }
        ],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'User',
        }]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

// userSchema
// .virtual('friendCount')
// .get(() => {
//     return this.friends.length;
// });

const User = model('user', userSchema);

module.exports = User;