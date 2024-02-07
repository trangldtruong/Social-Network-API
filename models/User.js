const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            //Must match a valid email address (look into Mongoose's matching validation)

        },
        thoughts: [
            {
                //Array of _id values referencing the Thought model
                type: Schema.Types.ObjectId,
                ref: 'Thought',
    
            },

        ] ,
        friends:  [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
    
            },

        ] ,
        
    },
    {
        toJSON: { 
            getters: true
        },
        id: false
    }
);

userSchema.virtual('friendCount').get(function () {
    return this.friends.length
})
// Initialize our User model
const User = model('user', userSchema);
module.exports = User;