const router = require('express').Router();
const db = require("../models");

router.get('/', async (req, res) => {
    try {
        // console.log('params', req.params.id);
        const response = await db.Workout.find({})
        console.log(response);
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/:id', async (req, res) => {
    try {
        console.log('params', req.params.id);
        const response = await db.Workout.findById(req.params.id)
        console.log(response);
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;