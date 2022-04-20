const { Router } = require('express');
const express = require('express');
const router = express.Router();


require('../db/connection');

const User = require('../Models/userSchema');

    router.get('/', (req, res) => {
    res.send('Hi World!')
    })
  
    router.get('/signin', (req, res) => {
      res.send('This is Signin Page')
    })
  
    router.post('/registration', (req, res) => {
      
      const {name,email} = req.body;

      if(!name || !email){
        return res.status(422).json({error:'Please fill All the Fields Correctly'});
      }

      User.findOne({email:email})
      .then((UserExist) => {
        if(UserExist){
          return res.status(422).json({error:'This E-mail is already Exist'});
        }

        const user = new User({name,email});

        user.save().then(() => {
          res.status(201).json({message:'Registration data saved'});
        }).catch((err) => res.status(500).json({error:'Not saved'}));
      }).catch((err) => {console.log(err)});
    });


module.exports = router;