const mongoose = require('mongoose')


const DB = 'mongodb+srv://abbasali:abbasaliakhtar@cluster0.9g3mb.mongodb.net/burgerproject?retryWrites=true&w=majority';


mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() =>{
    console.log('connection successfull');
  }).catch((err) =>
    console.log(err));