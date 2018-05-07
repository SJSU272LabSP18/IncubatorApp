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
  Likes:{
type: Number,
default:0

},
feedback:{

  type:String,
  default:""
},
status:{

  type:String,
  default:""
}



});

module.exports = mongoose.model('Projects', ProjectSchema);
