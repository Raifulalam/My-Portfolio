const express = require('express');
const Router = express.Router();
const Vlogs = require('../Models/VlogsModel');

Router.get('/vlogs', (req, res) => {
    Vlogs.find().then((vlogs) => {
        res.json(vlogs);
    }).catch((err) => {
        res.status(500).json({ message: err.message });
    });
})
Router.post('/vlogs', (req, res) => {
    const newVlog = new Vlogs(req.body);
    newVlog.save().then((vlog) => {
        res.json(vlog);
    }).catch((err) => {
        res.status(500).json({ message: err.message });
    })
});
module.exports = Router;