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
        //Set default value to the current timestamp
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        requred: true,
    },
    reactions: [ reactionSchema ]
        //Array of nested documents created with the reactionSchema

    
},
//Use a getter method to format the timestamp on query
{
    toJSON: { 
        getters: true
    },
    id: false
}
);
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length
});
// Initialize our User model
const Thought = model('thought', thoughtSchema);
module.exports = Thought;