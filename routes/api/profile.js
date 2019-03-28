const express = require('express');
const router = express.Router();
const passport = require('passport');
const Profile = require('../../models/Profile');
//const grav = require('gravatar');
//const User = require('../../models/User');
//const bcrypt = require('bcrypt');
//const regValidation = require('../../validation/register');
//const loginValidation = require('../../validation/login');
//const jwt = require('jsonwebtoken');

// Get profile
router.get('/',passport.authenticate('jwt',{session:false}),(req,res)=>{
    //TODO: Validation?

    Profile.findOne({user:req.user.id}).populate('user',['first_name','last_name','avatar']).then(profile=>{
        if(!profile)
            return res.status(404).json('Profile not found');
        res.json(profile);
    }).catch(error => res.status(404).json(error));
});


// Post profile
router.post('/',passport.authenticate('jwt',{session:false}),(req,res)=>{
    const profileData = {};
    profileData.user = req.user.id;

    if(req.body.status)
        profileData.status = req.body.status
    
    Profile.findOne({user:req.user.id}).then(profile=>{
        if(profile){
            Profile.findByIdAndUpdate({user:req.user.id},{$set: profileData}, {new: true}).then(profile=>{
                res.json(profile);
            });
        }
        else{
            new Profile(profileData).save().then(profile=>{
                res.json(profile);
            });
        }
    }).catch(error=>{
        res.status(404).json(error);
    })
});


// Get all profiles
router.get('/all',(req,res)=>{
    Profile.find().populate('user',['first_name','last_name','avatar']).then(profiles=>{
        if(!profiles)
            return res.status(404).json('There are no profiles available ..');
        res.json(profiles);
    }).catch(error=>res.status(404).json(error));
});

// Delete profile
router.delete('/',passport.authenticate('jwt',{session:false}),(req,res)=>{
    Profile.findOneAndRemove({user:req.user.id}).then(()=>{
        User.findOneAndRemove({_id:req.user.id}).then(()=>{
            res.json('The profile has been deleted successfully..');
        });
    })
})

module.exports = router;