const router = require('express').Router();

const apiRoutes = require('./api');
const exerciseRoutes = require('./exercise-routes');

router.use('/api', apiRoutes);
// router.use('/exercise', exerciseRoutes)

module.exports = router;