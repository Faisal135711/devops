// user.js

const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensure email is unique
        trim: true, // Trim whitespace from email
        lowercase: true, // Convert email to lowercase
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please enter a valid email address'] // Validate email format
    }
});

// Create and export the User model based on the schema
const user = mongoose.model('User', userSchema);
module.exports = user;
