const express = require('express');
const usersRoutes = require('./routes/users.routes');
const logMiddleware = require('./middleware/logs.middleware');
require('dotenv').config();
const upload = require('./middleware/multer');
const port = process.env.PORT || 4000; 


const app = express();

app.use(logMiddleware)
app.use(express.json());

app.use('/asset',express.static('public/image'));

app.use('/users',usersRoutes)
app.post('/upload',upload.single('foto'), (req, res) => {
  res.json({
    message: 'File Berhasil diupload'
  })
});
app.use((err, req, res, next) => {
  res.json({
    message: err.message,
  })
})
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
})