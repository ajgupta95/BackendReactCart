const mongoose=require('mongoose');
const schema=mongoose.Schema;


const adminSchema= new schema({
    email:{
        type:String,
        required:true,
        trim:true,
        
    },
    password:{
        type:String,
        required:true,
        trim:true
    }
},{
    timestamps:true,


});

const Admin= mongoose.model('Admin',adminSchema);

module.exports=Admin