const Thought = new userThought ({

    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 128,   
    },
    createdAt: {
        type: Date,

    },
    username: {
        type: String,
        requred: true
    },
    reactions: {

    }
}
);

module.exports = Thought;