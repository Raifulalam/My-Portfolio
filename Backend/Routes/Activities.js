const express = require('express');
const Router = express.Router();
const Activities = require('../Models/AcativitiesModel');

Router.get('/activities', (req, res) => {
    Activities.find().then((activities) => {
        res.json(activities);
    }).catch((err) => {
        res.status(400).json({ message: err.message });
    });

})
Router.post('/activities', (req, res) => {
    const newActivity = new Activities(req.body);
    newActivity.save().then((activity) => {
        res.json(activity);
    }).catch((err) => {
        res.status(400).json({ message: err.message });
    });

})
module.exports = Router;