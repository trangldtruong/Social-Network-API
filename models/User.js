const User = new networkUser(
    {
        username: {
            type: String,
            required: true,
            unique,
            trimmed,
        },
        email: {
            type: String,
            required: true,
            unique

        },
        thoughts: {

        },
        friends: {

        }


    }
);

module.exports = User;