const mongoose = require ('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})



userSchema.pre('save', async function(next) {
    console.log('hi');
    if(this.isModified('password')){
        this.password = bcrypt.hash(this.password,12);
    }
    next();
});


const User = mongoose.model('REGISTRATION', userSchema);

module.exports = User;