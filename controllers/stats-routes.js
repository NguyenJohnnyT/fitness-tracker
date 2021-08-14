const router = require('express').Router();
const db = require("../models");
const path = require("path");

router.get('/', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, "../public/stats.html"))
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;