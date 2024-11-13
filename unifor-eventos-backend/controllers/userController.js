const connection = require('../config/db');

// Controlador para registrar um novo usuário
exports.registerUser = (req, res) => {
    const { nome, matricula, tipo_usuario } = req.body;
    const query = 'INSERT INTO Usuario (nome, matricula, tipo_usuario) VALUES (?, ?, ?)';
    connection.query(query, [nome, matricula, tipo_usuario], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Usuário registrado com sucesso!' });
    });
};

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
        res.status(200).json(results[0]);
    });
};
