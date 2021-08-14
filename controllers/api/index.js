const router = require('express').Router();
const db = require("../../models");
const workoutRoutes = require('./workout-routes');

router.use('/workouts', workoutRoutes)

module.exports = router;
