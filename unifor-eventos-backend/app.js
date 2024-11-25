const express = require('express');
const app = express();
const eventRoutes = require('./routes/eventRoutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
app.use(cors());
// Middleware para parsear JSON
app.use(express.json());

// Rotas
app.use('/api/events', eventRoutes);
app.use('/api/users', userRoutes);

// Porta do servidor 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
