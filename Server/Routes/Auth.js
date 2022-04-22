const { Router } = require('express');
const express = require('express');
const router = express.Router();


require('../db/connection');

const User = require('../Models/userSchema');

    router.get('/', (req, res) => {
    res.send('Hi World!')
    })
  
    router.post('/signin',async (req, res) => {
     try{

        const {email,password} = req.body;

        if(!password || !email){
          return res.status(422).json({error:'Please fill All the Fields Correctly'});

        }


        const userlogin = await User.findOne({email:email,password:password});

        console.log(userlogin);

        if(!userlogin){
          res.status(400).json({error:'Record not found'});
        }
        else{
          res.status(400).json({error:'Sign in Successfully'});
        }

      }   catch (err){
            console.log(err);
          }
    });
  
    router.post('/registration', (req, res) => {
      
      const {email,password} = req.body;

      if(!password || !email){
        return res.status(422).json({error:'Please fill All the Fields Correctly'});

      }

      User.findOne({email:email})
      .then((UserExist) => {
        if(UserExist){
          return res.status(422).json({error:'This E-mail is already Exist'});
        }

        const user = new User({email,password});

        user.save().then(() => {
          res.status(201).json({message:'Registration data saved'});
        }).catch((err) => res.status(500).json({error:'Not saved'}));
      }).catch((err) => {console.log(err)});
    });


module.exports = router;