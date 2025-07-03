//Conexión con la BD usando la url del .env
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('conectado');
  } catch (err) {
    console.error('Error de conexión:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;