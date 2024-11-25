const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

<<<<<<< HEAD
// Rotas abertas
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);

// Rotas protegidas
=======
// Defina as rotas para os usuários (exemplos de rotas)
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
>>>>>>> 5d06feabb1b2fcf3d9147faf84287f2080d04482
router.get('/:id', userController.getUserById);

module.exports = router;
