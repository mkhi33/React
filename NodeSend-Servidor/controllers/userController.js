const User = require("../models/User");
const bcrypt = require('bcrypt');
const { validationResult } = require("express-validator");
exports.newUser = async (req, res) => {

    // Show message if there are errors in express validator
    const errors = validationResult(req);
    if( !errors.isEmpty() ) {
        return res.status(400).json({errors: errors.array()});
    }

    const { email, password } = req.body;

    let user = await User.findOne({email});

    if( user ) {
        return res.status(400).json({msg: 'User already exists'});
    }

    // Create a new user
    user = new User(req.body);

    //Hash password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    
    try {
        await user.save();
        res.json({message: 'User created successfully'})
    } catch (error) {
        console.log(error)
    }

};  
