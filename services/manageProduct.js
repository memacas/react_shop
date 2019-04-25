function poblarProductos(){

  const path = require('path');
  const fs = require('fs');

  const directoryPath = path.join(__dirname, '../frontend/src/assets/images');

  let listado_files = [];
  try{
    listado_files = fs.readdirSync(directoryPath, function (err, files) {
        if (!err) return files;
    });
  }
  catch(e){}
  return listado_files;
}

function randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }

module.exports = {
    poblarProductos,
    randomInt
}
