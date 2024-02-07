const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema ({

    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 128,   
    },
    createdAt: {
        type: Date,
        //Set default value to the current timestamp
        default: Date.now

        //Use a getter method to format the timestamp on query

    },
    username: {
        type: String,
        requred: true,
    },
    reactions: [ reactionSchema ]
        //Array of nested documents created with the reactionSchema

    
},
{
    toJSON: { 
        getters: true
    },
    id: false
}
);
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length
})
// Initialize our User model
const Thought = model('Thought', thoughtSchema);
module.exports = Thought;