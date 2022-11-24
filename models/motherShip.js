const mongoose = require('mongoose');

const motherShipSchema = mongoose.Schema({
    shipName: {type: String, unique: true},
    ship_ids:[String],

},{collection: 'motherShips'});

const model = mongoose.model('motherShip',motherShipSchema);
module.exports = model;