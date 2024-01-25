const Reaction = new socialReaction ({
    reactionId: {

    },

    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },

    username: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,

    }
}
);

module.exports = Reaction;