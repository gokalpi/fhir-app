const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
});

schema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
    delete ret.password;
    delete ret.createdDate;
  }
});

module.exports = mongoose.model('User', schema);
