const multer = require('multer');
const shortid = require('shortid');
const fs = require('fs');
const Link = require('../models/Link');


exports.uploadFile = async (req, res, next) => {
    const multerConfig = {
        limits: { fileSize: req.user ? 1024 * 1024 * 10 : 1024 * 1024 },
        storage: fileStorage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, __dirname + '/../uploads');
            },
            filename: (req, file, cb) => {
                const extension = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
                cb(null, `${shortid.generate()}${extension}`);

            }
        }),
    }
    const upload = multer(multerConfig).single('file');
    upload( req, res, async (error) => {
        console.log(req.file);
        if( !error ) {
            res.json({file: req.file.filename});
        }else {
            console.log(error);
            return next();
        }
    } )
}

exports.deleteFile = async (req, res) => {
    try {
        fs.unlinkSync(__dirname + `/../uploads/${req.file}`);
        
    } catch (error) {
        console.log(error);
    }
}

exports.downloadFile = async (req, res, next) => {

    const link = await Link.findOne({ name: req.params.file });

    const file = __dirname + '/../uploads/' + req.params.file;
    res.download(file);

    const { downloads, name } = link;


    if( downloads === 1 ) {
        req.file = name
        await Link.findOneAndRemove(link.id);
        next();
    }else {
        link.downloads--;
        await link.save();
    }

    
}