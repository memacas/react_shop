const User = require('../models/user'),
      jwt = require('jsonwebtoken'),
      config = require('../config/database');

module.exports = (router) => {

  router.get('/createUser', (req, res) => {
    // Crea un usuario y contrasena por defecto
    let user = new User({
      username: 'pruebauser06',
      password: 'pruebapass'
    });

    user.save((err) => {
      if (err){
        if (err.code === 11000){
          res.json({success: false, message: 'Ya existe al menos un usuario generado'});
        }
        else res.json({success: false, message: 'no grabó usuario. Err: ', err});
      }
      else
        res.json({success: false, message: 'Se generò un usuario'});
    })
  })

  router.post('/login', (req, res) => {
    if(!req.body.username) res.json({ success: false, message: "falta el usuario"});
    else if (!req.body.password) res.json({ success: false, message: "falta el password"});
    else{
      User.findOne({ username: req.body.username }, (err, user) => {
        if (err){
          res.json({ success: false, message: err });
        }else {
          if ( !user ) res.json({ success: false, message: "el usuario no existe" });
          else{
            const valid_password = user.comparePassword( req.body.password );
            if ( !valid_password ) res.json({ success: false, message: "el usuario/password no coincide" });
            else{
              res.json({ success: true, message: "autenticado ok "})
            }
          }
        }
      })
    }
  })

  return router;
}
