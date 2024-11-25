const jwt = require('jsonwebtoken');

exports.authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) return res.status(401).json({ message: 'Token não fornecido!' });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: 'Token inválido!' });

        req.user = user; // Adiciona o usuário decodificado à requisição
        next();
    });
};
