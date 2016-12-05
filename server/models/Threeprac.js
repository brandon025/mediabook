var mongoose = require('mongoose');

// Create the MovieSchema.
var ThreepracSchema = new mongoose.Schema({
  ball: {
    type: String,
    required: true
  }
});

// Export the model schema.
module.exports = ThreepracSchema;