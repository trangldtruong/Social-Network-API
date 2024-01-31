const Thought = new userThought ({

    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 128,   
    },
    createdAt: {
        type: Date,
        //Set default value to the current timestamp

        //Use a getter method to format the timestamp on query

    },
    username: {
        type: String,
        requred: true,
    },
    reactions: {
        //Array of nested documents created with the reactionSchema
        
    }
}
);

module.exports = Thought;