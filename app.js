

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');



const app = express();


app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/ShopingCart', {useNewUrlParser: true}).then((res )=>{
    console.log('connected to db')
},(err)=>{
    console.log('not connected to db:', err )
})


const adminRouter = require('./routes/admin');
const usersRouter = require('./routes/user');

app.use('/admin', adminRouter);
app.use('/users', usersRouter);

app.listen(5000, () => {
    console.log("Server is running on port: 5000");
});













