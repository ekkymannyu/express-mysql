const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, 'public/image')
  },
  filename: (req, file, callBack) => {
    // untuk mengambil waktu user mengupload file
    const timestamp = new Date().getTime();
    // untuk mengambil nama file
    const originalname = file.originalname;
    // untuk mengambil extension dari nama file
    // const extension = path.extname(file.originalname);
    callBack(null, `${timestamp}-${originalname}`);
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 3 * 1000 * 1000 //3 MB maksimal size file
  }
});

module.exports = upload;