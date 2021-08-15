const router = require('express').Router();
const db = require("../../models");

router.get('/', async (req, res) => { //TESTED
    try {
        // console.log(req);
        const response = await db.Workout.find({})
        // console.log(response);
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/range', async (req, res) => { //TESTED
    try {
        const response = await db.Workout.find({});
        const range = []
        for (let i = response.length-1; i>=0; i--) {
            range.unshift(response[i]);
        }
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