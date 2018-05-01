const mongoose = require('mongoose');

const reviewScore = new mongoose.Schema({
  number: {
  type     : Number,
  required : true,
  validate : {
    validator : Number.isInteger,
    message   : '{VALUE} is not an integer value'
  }
}
});

module.exports = mongoose.model('reviewScore', reviewScore);
