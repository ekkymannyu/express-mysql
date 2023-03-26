const dbPool= require('../config/database');
const getAllUsers = () => {
  const sqlQuery = 'SELECT * FROM users';
  return dbPool.execute(sqlQuery);

  // //Untuk Debugging
  //   dbPool.execute(sqlQuery, (err,rows) => {
  //   if (err) {
  //     res.json({
  //       massage:'Connection Failed'
  //     })
  //   }
  //   res.json({
  //     massage: 'Connection Success',
  //     data: rows,
  //   });
  // })
}
const createNewUser = (body) => {
  const sqlQuery = `INSERT INTO users (nama,email,jurusan,fakultas,alamat) 
                    VALUES (
                      '${body.nama}',
                      '${body.email}',
                      '${body.jurusan}',
                      '${body.fakultas}',
                      '${body.alamat}'
                      )`;
  return dbPool.execute(sqlQuery);
}
const updateUser = (body, idUser) => {
  const sqlQuery = `UPDATE users SET
                    nama='${body.nama}',
                    email='${body.email}',
                    jurusan='${body.jurusan}',
                    fakultas='${body.fakultas}',
                    alamat='${body.alamat}'
                    WHERE id=${idUser}
                    `
  return dbPool.execute(sqlQuery);
};

const deleteUser = (idUser) => {
  const sqlQuery = `DELETE FROM users WHERE id=${idUser}`;
  return dbPool.execute(sqlQuery);
}


module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser
}