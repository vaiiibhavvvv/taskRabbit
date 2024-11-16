import multer from "multer";

const storage = multer.diskStorage({destination:(req,file,cb) => {
    cb(null,'uploads/');
},

filename: (req,file,cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
},
});

const fileFilter = (req,file,cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null,true);
    }
    else{
        cb(new Error('Invalid file type, only JPEG and PNG are allowed!'),false);
    }
};

module.exports = multer({
    storage,
    limits: {fileSize: 2*1024*1024}, // 2MB
    fileFilter
});