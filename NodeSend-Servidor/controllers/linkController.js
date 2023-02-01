const Link = require('../models/Link')
const shortid = require('shortid');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
exports.newLink = async (req, res, next) => {

    const errors = validationResult(req);
    if( !errors.isEmpty() ) {
        return res.status(400).json({errors: errors.array()});
    }

    const { original_name, name } = req.body;
    const link = new Link();
    link.url = shortid.generate();
    link.name = name;
    link.original_name = original_name;
    
    if(req.user) {
        const { password, downloads } = req.body;

        if(downloads) {
            link.downloads = downloads;
        }
        if(password) {
            const salt = await bcrypt.genSalt(10);
            link.password = await bcrypt.hash(password, salt);
        }

        link.author = req.user.id;
    }

    try {
        await link.save();
        return res.json({ msg: `${link.url}` });
    } catch (error) {
        
    }
}

exports.getLink = async (req, res, next) => {
    const { url } = req.params;

    const link = await Link.findOne({ url });
    if(!link) {
        res.status(404).json({msg: 'Link not found'});
        return next();
    }


    res.json({file: link.name});

    next();

}

exports.allLinks = async (req, res) => {
    try {
        const links = await Link.find({}).select('url -_id');
        res.json({ links });
    } catch (error) {
        console.log(error);
    }
}