const mongoose = require('mongoose');
const { data } = require('react-router-dom');
const { Schema } = mongoose;

const ActivitiesSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    icon: {
        type: String, // You can store icon name, class (e.g., "bx bx-code"), or URL
        default: ''
    },

}, { timestamps: true });

const Activity = mongoose.model('Activity', ActivitiesSchema);

module.exports = Activity;
