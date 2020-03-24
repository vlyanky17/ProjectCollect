const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    nazv: {type: String, required: true},
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
    tag: [{ type: Types.ObjectId, ref: 'Tag' }],
    coment: [{ type: Types.ObjectId, ref: 'Coment' }],
    like: [{ type: Types.ObjectId, ref: 'Like' }],
    owner: {type: Types.ObjectId, ref: 'Colec'}
})

module.exports = model('Item', schema)
