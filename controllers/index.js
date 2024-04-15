const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const singlePostRoutes = require('./singlePostRoute');

router.use('/', homeRoutes)
router.use('/post', singlePostRoutes)
router.use('/api', apiRoutes);

module.exports = router;