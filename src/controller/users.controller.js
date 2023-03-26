const usersModels = require('../models/users.models')
//Handler menampilkan user
const getAllUsers = async (req, res) => {
  try {
  //Dilakukan Destructering karna memunculkan nilai field
  const [data] = await usersModels.getAllUsers();
  res.status(200).json({
    message: 'Get Users Success',
    data: data
  })  
  } catch (error) {
    res.status(500).json({
      message: 'Server ERROR',
      ServerMessage: error,
    })
  }
  
}

//Handler menambahkan user
const createNewUser = async (req, res) => {
  // console.log(req.body);
  // res.json({
  //   massege: 'Create User Success',
  //   data: req.body
  // })

  const { body } = req;
  if (!body.nama || !body.email || !body.jurusan || !body.fakultas || !body.alamat) {
    return res.status(400).json({
      massege: 'Anda Mengirimkan data yang salah',
      data: null
    })
  }
  try {
    await usersModels.createNewUser(body);
    res.status(201).json({
      massege: 'Create user Success',
      data: body
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server ERROR',
      ServerMessage: error,
    })
  };
};

//Handler untuk ubah data user sesuai ID
const updateUser = async (req, res) => {
  const { idUser } = req.params;
  const { body } = req;
  try {
    await usersModels.updateUser(body, idUser);
    res.status(200).json({
      massege: 'UPDATE user success ',
      data: {
        id: idUser,
        ...body
      }
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server ERROR',
      ServerMessage: error,
    })
  };
  // console.log('Id User : ', idUser);


};

//Handler untuk menghapus data user sesuai ID
const deleteUser = async (req, res) => {
  const { idUser } = req.params;
  const { body } = req;
  try {
    await usersModels.deleteUser(idUser)
    res.status(200).json({
      massege: 'Delete User Success',
      data: null
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server ERROR',
      ServerMessage: error,
    })
  }
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser
}