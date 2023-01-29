const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require("express-validator");


exports.authUser = async (req, res, next) => {

    const errors = validationResult(req);
    if( !errors.isEmpty() ) {
        return res.status(400).json({errors: errors.array()});
    }


    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
        res.status(401).json({ msg: "User doesn't exists" });
        return next();
    }
    if (bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({
            id: user._id,
            name: user.name,
            email: user.email
        }, process.env.SECRET, {
            expiresIn: '8h',
        })
        return res.json({ token });


    }else {
        console.log("Incorrect password");
    }
}

exports.authenticatedUser = async (req, res) => {
    res.json({ user: req.user });
}