const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
} = require('../../controllers/thoughtController.js')

//get all thoughts
//post to create a new thought

router.route('/').get(getThoughts).post(createThought);

//get a thought by id
//put to update a thought by id
//delete to remove a thought by id
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;