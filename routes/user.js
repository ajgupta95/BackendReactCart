
const {Router} =require('express');
const User=require('../models/admin');
const jwt=require('jsonwebtoken');


const router=Router();


router.route('/add').post((req, res) => {
  const email = req.body.email;
  const password=req.body.password;

  const newUser = new User({email,password});

  
    User.find({email:email}).then((ress)=>{
      console.log(ress);
      console.log(email);
      if(ress.length===0){
        newUser.save()
        console.log("save")
        res.json("user added")
        
      }else{
        res.json("user exits")
      }
      
    // .then(() => res.json('User added!'))
   // .catch(err => res.json("Errors"));
    })
  
});

router.route('/login').post((req, res) => {
  const email = req.body.email;
  const password=req.body.password;

  User.findOne({email:email}).then(ress=>{
   if(ress===null) {
     console.log("res",ress)
       return res.json("User not exits Sign In First")}
    if(ress.password!==password.toString()){
     return  res.json("Plese Enter Correct Password")
    }
    var token= jwt.sign({email:email},'reactlogin');
    console.log('jwtToken',token);
    //res.cookie('jwtTToken',token);
    res.json({msg:"logged in Successfull",t:token})
  });
});






  module.exports = router;

