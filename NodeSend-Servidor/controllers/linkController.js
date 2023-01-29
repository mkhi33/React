const Link = require('../models/Link')
const shortid = require('shortid');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
exports.newLink = async (req, res, next) => {

    const errors = validationResult(req);
    if( !errors.isEmpty() ) {
        return res.status(400).json({errors: errors.array()});
    }

    const { original_name } = req.body;

    const link = new Link();
    link.url = shortid.generate();
    link.name = shortid.generate();
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
    const { url, downloads, name } = req.params;

    const link = await Link.findOne({ url });
    if(!link) {
        res.status(404).json({msg: 'Link not found'});
        return next();
    }

    if( downloads === 1 ) {
        req.file = name
        await Link.findOneAndRemove({ url });
        next();
    }else {
        link.downloads--;
        await link.save();
    }
    res.json({file: link.name});

}