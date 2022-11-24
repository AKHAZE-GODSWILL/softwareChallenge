const mongoose = require('mongoose');

const shipSchema = mongoose.Schema({
    shipName: {type: String, unique: true},
    crewMembers_ids:[String],

},{collection: 'ships'});

const model = mongoose.model('ship',shipSchema);
module.exports = model;