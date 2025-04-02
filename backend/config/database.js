const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nombre_de_tu_base_de_datos', 'usuario', '1918sr', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => console.log('✅ Conectado a MySQL'))
    .catch(err => console.error('❌ Error al conectar a MySQL:', err));

module.exports = sequelize;
