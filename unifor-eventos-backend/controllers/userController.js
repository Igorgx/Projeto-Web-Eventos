const connection = require('../config/db');
<<<<<<< HEAD
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

// Registro do Usuário
exports.registerUser = (req, res) => {
    const { nome, matricula, tipo_usuario, senha } = req.body;

    // Criptografar a senha
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(senha, salt);

    const query = 'INSERT INTO Usuario (nome, matricula, tipo_usuario, senha) VALUES (?, ?, ?, ?)';
    connection.query(query, [nome, matricula, tipo_usuario, hashedPassword], (err) => {
=======

// Controlador para registrar um novo usuário
exports.registerUser = (req, res) => {
    const { nome, matricula, tipo_usuario } = req.body;
    const query = 'INSERT INTO Usuario (nome, matricula, tipo_usuario) VALUES (?, ?, ?)';
    connection.query(query, [nome, matricula, tipo_usuario], (err, results) => {
>>>>>>> 5d06feabb1b2fcf3d9147faf84287f2080d04482
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Usuário registrado com sucesso!' });
    });
};

<<<<<<< HEAD
exports.loginUser = (req, res) => {
    const { matricula, senha } = req.body;

    const query = 'SELECT * FROM Usuario WHERE matricula = ?';
    connection.query(query, [matricula], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });

        if (results.length === 0) {
            return res.status(404).json({ message: 'Usuário não encontrado!' });
        }

        const user = results[0];

        // Comparar a senha enviada com a senha armazenada (hash)
        const validPassword = bcrypt.compareSync(senha, user.senha);

        if (!validPassword) {
            return res.status(401).json({ message: 'Senha inválida!' });
        }

        // Gerar token JWT
        const token = jwt.sign({ id: user.usuario_id, matricula: user.matricula}, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: 'Login realizado com sucesso!', token });
    });
};



// Buscar Usuário por ID
exports.getUserById = (req, res) => {
    const { id } = req.params;

    const query = 'SELECT * FROM Usuario WHERE usuario_id = ?';
    connection.query(query, [id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });

        if (results.length === 0) {
            return res.status(404).json({ message: 'Usuário não encontrado!' });
        }

=======
// Controlador para fazer login de um usuário (exemplo simples)
exports.loginUser = (req, res) => {
    const { matricula } = req.body;
    const query = 'SELECT * FROM Usuario WHERE matricula = ?';
    connection.query(query, [matricula], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ message: 'Usuário não encontrado!' });
        res.status(200).json(results[0]);
    });
};

// Controlador para obter informações de um usuário por ID
exports.getUserById = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM Usuario WHERE usuario_id = ?';
    connection.query(query, [id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ message: 'Usuário não encontrado!' });
>>>>>>> 5d06feabb1b2fcf3d9147faf84287f2080d04482
        res.status(200).json(results[0]);
    });
};
