const mongoose = require('mongoose');

const crewMemberSchema = mongoose.Schema({
    name: String,

},{collection: 'crewMembers'});

const model = mongoose.model('crewMembers',crewMemberSchema);
module.exports = model;