const express = require('express');
const app = express();
const eventRoutes = require('./routes/eventRoutes');
const userRoutes = require('./routes/userRoutes');
<<<<<<< HEAD
const cors = require('cors');
app.use(cors());
=======

>>>>>>> 5d06feabb1b2fcf3d9147faf84287f2080d04482
// Middleware para parsear JSON
app.use(express.json());

// Rotas
app.use('/api/events', eventRoutes);
app.use('/api/users', userRoutes);

<<<<<<< HEAD
// Porta do servidor 
=======
// Porta do servidor
>>>>>>> 5d06feabb1b2fcf3d9147faf84287f2080d04482
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
