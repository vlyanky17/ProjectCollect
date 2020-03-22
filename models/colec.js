const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    nam: {type: String, required: true, unique: true},
    disk: {type: String, required: true},
    tem: {type: String, required: true},
    pict: {type: String, required: false},
    intgr1: {type: String, required: false},
    intgr2: {type: String, required: false},
    intgr3: {type: String, required: false},
    Cstr1: {type: String, required: false},
    Cstr2: {type: String, required: false},
    Cstr3: {type: String, required: false},
    Cdate1: {type: String, required: false},
    Cdate2: {type: String, required: false},
    Cdate3: {type: String, required: false},
    Ctxt1: {type: String, required: false},
    Ctxt2: {type: String, required: false},
    Ctxt3: {type: String, required: false},
    Cbol1: {type: String, required: false},
    Cbol2: {type: String, required: false},
    Cbol3: {type: String, required: false},
    Item: [{ type: Types.ObjectId, ref: 'Item' }],
    owner: {type:  String, required: false}
})

module.exports = model('Colec', schema)
