const mongoose=require('mongoose');
const schema=mongoose.Schema;


const userSchema= new schema({
    username:{
        type:String,
        required:true,
        trim:true,
        minlength:3
    },
    email:{type:String,required:true,trim:true},
    password:{type:String,required:true,trim:true}
    


});

const User= mongoose.model('Users',userSchema);

module.exports=User;