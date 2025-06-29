const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

// Configuración
app.set('port', process.env.PORT || 5000);

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API del Acuario Piscilandia funcionando!');
});

// Iniciar servidor
app.listen(app.get('port'), () => {
  console.log(`Servidor corriendo en puerto ${app.get('port')}`);
});