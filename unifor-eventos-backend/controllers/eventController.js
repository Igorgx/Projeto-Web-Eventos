const connection = require('../config/db');

exports.createEvent = (req, res) => {
    const { titulo, descricao, data_evento, local, criador_id } = req.body;
    const query = 'INSERT INTO Evento (titulo, descricao, data_evento, local, criador_id) VALUES (?, ?, ?, ?, ?)';
    connection.query(query, [titulo, descricao, data_evento, local, criador_id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Evento criado com sucesso!' });
    });
};

exports.getAllEvents = (req, res) => {
    const query = 'SELECT * FROM Evento';
    connection.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(results);
    });
};

exports.updateEvent = (req, res) => {
    const { id } = req.params;
    const { titulo, descricao, data_evento, local } = req.body;
    const query = 'UPDATE Evento SET titulo = ?, descricao = ?, data_evento = ?, local = ? WHERE evento_id = ?';
    connection.query(query, [titulo, descricao, data_evento, local, id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ message: 'Evento atualizado com sucesso!' });
    });
};

exports.deleteEvent = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM Evento WHERE evento_id = ?';
    connection.query(query, [id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ message: 'Evento deletado com sucesso!' });
    });
};
