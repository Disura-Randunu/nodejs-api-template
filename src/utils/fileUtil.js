const path = require('path')
const fs = require('fs')
const multer  = require('multer')

const getRootPath = () => {
    return path.resolve(__dirname, '../', '../');
}

const getUploadPath = () => {
    return path.resolve(__dirname, '../', '../', 'uploads');
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, getUploadPath())
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) // use uuid
      cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname.slice(file.originalname.lastIndexOf('.')))
    }
  })
  
const upload = multer({ storage: storage, preservePath: true })

const getUploader = () => {
    return upload
}

const deleteFile = async (path) => {
  fs.unlinkSync(path)    
}


module.exports = {
    getRootPath,
    getUploadPath,
    getUploader,
    deleteFile
}