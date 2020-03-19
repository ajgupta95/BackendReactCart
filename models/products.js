const mongoose=require('mongoose');
const schema=mongoose.Schema;


const products= new schema({
    title:{
        type:String,
        required:true,
        trim:true,
    
    },
   price:{type:String,required:true,trim:true},
    imageurl:{type:String,required:true,trim:true},
    description:{type:String,required:true,trim:true},


});

const Products= mongoose.model('Products',products);

module.exports=Products