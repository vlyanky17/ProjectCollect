const {Schema,model} = require('mongoose')

const schema = new Schema({
    login:{type:String,required:true, unique: true},
    password: {type:String , required:true},
    admin: {type:String , required:true},
    links: [{ type: Types.ObjectId, ref: 'Item' }]
})

module.exports = model('user', schema)