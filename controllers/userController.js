const { User, Thought } = require('../models');

module.exports = {
    //get all users
    async getUsers (req, res) {
        try {
            const users = await User.find();

            const userObj = {
                users,
                friendCount: await friendCount(),
            };
            res.json(userObj);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    }
}