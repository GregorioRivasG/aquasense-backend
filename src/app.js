//Rutas, conexion con la BD e inicio del servidor (puerto 500)

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const userRoutes = require('./routes/users.js');
const tankRoutes = require('./routes/Tanks.js');

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/users', userRoutes);
app.use('/api/tanks', tankRoutes);

const apiRoutes = require('./routes/api.js');
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.send('Prueba de API funcionando');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));