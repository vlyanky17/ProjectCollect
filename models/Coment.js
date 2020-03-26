const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    nam: {type: String, required: true},
    comen: {type: String, required: true},
    dat: {type: String, required: true},
    owner: {type: Types.ObjectId, ref: 'Item'}
})

module.exports = model('Coment', schema)
