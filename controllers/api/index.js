const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

//routes
router.use('/users', userRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes)

module.exports = router;