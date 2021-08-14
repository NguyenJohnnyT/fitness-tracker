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

router.put('/:id', async (req, res) => { //TESTED
    try {
        const response = await db.Workout.findByIdAndUpdate(
            req.params.id,
            req.body,
            (err, edited) => {
                if (err) {
                    console.log(err);
                    res.send(err);
                } else {
                    console.log(edited);
                    res.send(edited);
                }
            }
        )
        console.log(response);
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.post('/', async (req, res) => { //TESTED
    try {
        const response = await db.Workout.create(req.body,
            (err, created) => {
                if (err) {
                    console.log(err);
                    res.send(err);
                }
            }
        )
        res.json(response);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;