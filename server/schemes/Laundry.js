const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const laundrySchema = new Schema({
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

const Laundry = mongoose.model('Laundry', laundrySchema);

module.exports = Laundry;