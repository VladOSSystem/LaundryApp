const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lastKeySchema = new Schema({
  endTime: {
    type: String,
    required: true,
    unique: false,
    trim: true,
    minlength: 3
  },
  countOfMachines: {
    type: String,
    required: true,
    unique: false,
    trim: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
}, {
  timestamps: true,
});

const LastKey = mongoose.model('LastKey', lastKeySchema);

module.exports = LastKey;