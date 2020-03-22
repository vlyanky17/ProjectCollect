const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    login:{type:String,required:true, unique: true},
    password: {type:String , required:true},
    Admin: {type:String , required:true},
    Colec: [{ type: Types.ObjectId, ref: 'Colec' }]

})

module.exports = model('User', schema)