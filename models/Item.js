const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    name: {type: String, required: true},
    disk: {type: String, required: true},
    tem: {type: String, required: true},
    pict: {type: String, required: false},
    owner: {type: Types.ObjectId, ref: 'User'}
})

module.exports = model('item', schema)
