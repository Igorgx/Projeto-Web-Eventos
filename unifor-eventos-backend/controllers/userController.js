const connection = require('../config/db');
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
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Usuário registrado com sucesso!' });
    });
};

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

        res.status(200).json(results[0]);
    });
};
