const bcrypt = require('bcryptjs');

// Substitua pela senha que deseja armazenar no banco
const senha = '96574258';
const salt = bcrypt.genSaltSync(10);
const hashedPassword = bcrypt.hashSync(senha, salt);

console.log('Senha criptografada:', hashedPassword);
