const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
  uri: 'mongodb://localhost:27017/angular_shop',
  secret: crypto,
  db: 'angular_shop'
}
