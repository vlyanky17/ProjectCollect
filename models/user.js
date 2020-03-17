const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    login:{type:String,required:true, unique: true},
    password: {type:String , required:true},
    Admin: {type:String , required:true},
    colec: [{ type: Types.ObjectId, ref: 'colec' }]

})

module.exports = model('user', schema)