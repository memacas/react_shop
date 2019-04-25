const express = require('express'),
      app = express(), //Inicializar express
      router = express.Router(),
      port = process.env.PORT || 8080,
      mongoose = require('mongoose'), //App node para conectar con mongo
      config_db = require('./config/database'), //Configuraciòn de ruta, etc de la base de datos mongo
      path = require('path'),
      authentication = require('./routes/authentication')(router),
      product = require('./routes/product')(router),
      body_parser = require('body-parser'),
      cors = require('cors');

// Conexión a la base de datos
mongoose.Promise = global.Promise;
mongoose.connect(config_db.uri, (err) => {
  if (err) console.log('No se pudo conectar a Mongo');
  else console.log('Conectado a Mongo: ' + config_db.db);
});

app.use(cors({origin: 'http://localhost:4200'}));

// parse wn www-form-urlencoded
app.use(body_parser.urlencoded({ extended: false}));
//parte application/json
app.use(body_parser.json());

// Provee el directorio estatico del frontend
app.use(express.static(__dirname + '/frontend/dist/'));

//Solicita autenticación de usuario
app.use('/authentication', authentication);

app.use('/product', product);

// Conecta el servidor nodejs con Angular2
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + '/frontend/dist/index.html'));
});

// Escucha nodejs en el puerto 8080 o el definido en el ambiente
app.listen(port, function () {
  console.log('Escuchando en el puerto ' + port + '!');
});
