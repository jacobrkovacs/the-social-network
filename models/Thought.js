const {Schema, model, now} = require('mongoose').set('strictPopulate', false);;


const reactionSchema = Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        max: 280
    },
    username: {
        type: String,
        required: true,
        ref: 'User'
    },
    createdAt: { 
        type: Date,
        default: Date.now
    },
})

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min: 1,
            max: 280
        },
        createdAt: { 
            type: Date,
            default: Date.now
        },
        username: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
         reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

// thoughtSchema
// .virtual('reactionCount')
// .get(() => {
//     return this.reactions.length;
// });

const Thought = model('thought', thoughtSchema);

module.exports = Thought