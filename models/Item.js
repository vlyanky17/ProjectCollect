const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    name: {type: String, required: true},
    disk: {type: String, required: true},
    tem: {type: String, required: true},
    pict: {type: String, required: false},
    intgr1: {type: Number, required: false},
    intgr2: {type: Number, required: false},
    intgr3: {type: Number, required: false},
    str1: {type: String, required: false},
    str2: {type: String, required: false},
    str3: {type: String, required: false},
    date1: {type: Date, required: false},
    date2: {type: Date, required: false},
    date3: {type: Date, required: false},
    txt1: {type: Text, required: false},
    txt2: {type: Text, required: false},
    txt3: {type: Text, required: false},
    bol1: {type: Boolean, required: false},
    bol2: {type: Boolean, required: false},
    bol3: {type: Boolean, required: false},
    owner: {type: Types.ObjectId, ref: 'User'}
})

module.exports = model('item', schema)
