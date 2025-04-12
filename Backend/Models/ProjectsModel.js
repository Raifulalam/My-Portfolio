const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProjectsSchema = new Schema({
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
    tech: {
        type: [String], // An array of strings (e.g., ['React', 'Node.js'])
        default: []
    },
    live: {
        type: String,
        required: true,
        trim: true
    },
    github: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true });

const Project = mongoose.model('Project', ProjectsSchema);

module.exports = Project;
