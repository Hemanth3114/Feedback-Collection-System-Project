const mongoose = require('mongoose');

// Define the schema for feedback
const feedbackSchema = new mongoose.Schema({
    name: String,
    contactNumber: String,
    email: String,
    feedback: String
});

// Create and export the model from the schema
module.exports = mongoose.model('Feedback', feedbackSchema);
