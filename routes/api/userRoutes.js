const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    deleteUser,
    addUser,
    removeUser,
} = require('../../controllers/userController')
// get all users
router.route('/').get(getUsers).post(createUser);

//get a single user by its id and populated thought and friend data
router.route('/:userId').get(getSingleUser).delete(deleteUser);

//post a new user


//put to update a user by its id

//delete to remove user by its id

//post to add a new friend to a user's friend list

//delete to remove a friend from a user's friend list

module.exports = router;