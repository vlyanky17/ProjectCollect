const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    nam: {type: String, required: false},
    comen: {type: String, required: false},
    dat: {type: String, required: false},
    owner: {type: Types.ObjectId, ref: 'Item'}
})

module.exports = model('Coment', schema)
