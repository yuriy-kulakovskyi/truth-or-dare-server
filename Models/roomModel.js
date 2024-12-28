const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  message: String
});

const roomModel = mongoose.model('Room', roomSchema);

module.exports = roomModel;