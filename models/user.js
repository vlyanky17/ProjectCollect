const {Schema,model} = require('mongoose')

const schema = new Schema({
    login:{type:String,required:true, unique: true},
    password: {type:String , required:true},
    email: {type:String , required:true},
    datReg: {type:String , required:true},
    datLog: {type:String , required:true},
    stat: {type:String , required:true}
})

module.exports = model('user', schema)