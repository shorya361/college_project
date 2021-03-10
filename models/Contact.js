const mongoose=require('mongoose');

const ContactSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    phone:{
        type:Number
    },
    type:{
        type:String,
        default:'personal'
    },
    age:{
        type:String
    },
    allergies:{
        type:String
    },
    bloodGroup:{
        type:String
    },
    recent_injury:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    },
    medication:{
        type:String
    }
    ,
    hospital_name:{
        type:String
    }
});

module.exports=mongoose.model('contact',ContactSchema);