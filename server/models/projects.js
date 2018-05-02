const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  UserName:{
    type: String,
    default: ''

  },
  Submitter: {
    type: String,
    default: ''
  },
  CoSubmitters: {
    type: String,
    default: ''
  },
  InnovationTitle: {
    type: String,
    default: ''
  },
  Description: {
    type: String,
    default: ''
  },
  Product: {
    type: String,
    default: ''
  },

  Component: {
    type: String,
    default: ''
  },
  OperatingSystem: {
    type: String,
    default: ''
  },
  GitLink: {
    type: String,
    default: ''
  },
  TotalVotes:{
type: Number,
default:0

},
VoteSum:{

  type:Number,
  default:0
},
VoteMean:{

  type:Number,
  default:0
}

});

module.exports = mongoose.model('Projects', ProjectSchema);
