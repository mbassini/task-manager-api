const multer = require('multer')

const upload = multer({
    limits: { fileSize: 1000000 },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('File must be an image (.jpg, .jpeg, .png)'))
        }
        cb(undefined, true)
    }
 })

 const uploadValidation = upload.single('avatar')

 module.exports = uploadValidation