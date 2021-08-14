const router = require('express').Router();
const db = require("../../models");

router.get('/', async (req, res) => {
    try {
        // console.log(req);
        const response = await db.Workout.find({})
        console.log(response);
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/:id', async (req, res) => {
    try {
        // console.log(req);
        const response = await db.Workout.findById(req.params.id)
        console.log(response);
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.put('/:id', async (req, res) => {
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



module.exports = router;
