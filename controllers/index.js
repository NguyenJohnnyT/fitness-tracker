const router = require('express').Router();

const apiRoutes = require('./api');
const exerciseRoutes = require('./exercise-routes');
const statsRoutes = require('./stats-routes');

router.use('/api', apiRoutes);
router.use('/exercise', exerciseRoutes)
router.use('/stats', statsRoutes);
module.exports = router;