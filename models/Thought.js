const {Schema, model, now} = require('mongoose');


const reactionSchema = Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    }
})

const thoughtSchema = Schema(
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
            type: String,
            required: true,
            ref: 'user'
        },
         reactions: [reactionSchema]
    }
)