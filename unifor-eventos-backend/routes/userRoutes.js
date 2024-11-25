const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rotas abertas
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);

// Rotas protegidas
router.get('/:id', userController.getUserById);

module.exports = router;
