const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    nam: {type: String, required: true, unique: true},
    disk: {type: String, required: true},
    tem: {type: String, required: true}
})

module.exports = model('Colec', schema)
