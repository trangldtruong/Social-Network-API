const router = require('express').Router();
const reactionRoutes = require('./reactionRoutes');
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

router.use('/users', userRoutes);
router.use('/reactions', reactionRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;