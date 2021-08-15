const router = require('express').Router();
const db = require("../../models");

router.get('/', async (req, res) => { //TESTED
    try {
        // console.log(req);
        const workouts = await db.Workout.find({})
        workouts.forEach(workout => {
            var totalDur = 0
            var totalDis = 0
            workout.exercises.forEach(exercise => {
                // console.log('exercise', exercise);
                totalDur += exercise.duration
                totalDis += exercise.distance
            });
            
            workout.totalDuration = totalDur
            workout.totalDistance = totalDis
            // console.log('is this working..? ', workout.totalDuration);
            // console.log('workout ', workout);
        })
        console.log('ALL workouts', workouts);

        res.status(200).json(workouts);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/range', async (req, res) => { //TESTED
    try {
        const response = await db.Workout.find({});
        const range = []
        var sevenDays = new Date().setDate(new Date().getDate()-7);
        for (let i = response.length-1; i>=0; i--) {
            // console.log('response[i], ', response[i])
            if (response[i].day > sevenDays) {
                range.unshift(response[i]);
            }
        }
        // console.log(range);
        res.status(200).json(range)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

router.get('/:id', async (req, res) => { //TESTED
    try {
        // console.log(req);
        const response = await db.Workout.findById(req.params.id)
        console.log(response);
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json(err);
    }
})

//add exercise
router.put('/:id', async (req, res) => { //TESTED
    try {
        const response = await db.Workout.findByIdAndUpdate(
            req.params.id,
            {
                $push: { exercises: req.body }
            }
        );
        // console.log(response);
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json(err);
    }
})

//create workout
router.post('/', async ({ body }, res) => { //TESTED
    try {
        const response = await db.Workout.create(body)
        res.json(response);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;