const express = require('express');
const userController = require('../controller/users.controller')

const router = express.Router();
//Create - POST
router.post('/', userController.createNewUser);
//Read - GET
router.get('/', userController.getAllUsers);
//Update - Patch
router.patch('/:idUser', userController.updateUser);
//Delete - Delete
router.delete('/:idUser', userController.deleteUser);


module.exports = router;