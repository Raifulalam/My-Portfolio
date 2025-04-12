const mongoose = require('mongoose');
const { Schema } = mongoose;

const VlogSchema = new Schema({
    type: {
        type: String,
        enum: ['quote', 'link', 'video'],
        required: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true // Adds createdAt and updatedAt fields
});

const Vlog = mongoose.model('Vlog', VlogSchema);

module.exports = Vlog;
