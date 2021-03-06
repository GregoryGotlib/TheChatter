const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    
    text:{
        type:String,
        required:true
    },

    avatar:{
        type:String
    },
});
module.exports = User = mongoose.model('users',MessageSchema);