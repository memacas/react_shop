const mongoose = require('mongoose'),
      bcrypt = require('bcrypt-nodejs');

const Schema = mongoose.Schema,
      userSchema = new Schema({
        username: { type: String, required: true, unique: true},
        password: { type: String, required: true}
      });

userSchema.methods.comparePassword = function(password){
  return bcrypt.compareSync(password, this.password);
}

userSchema.pre('save', function (next){
  if(!this.isModified('password')) return next();

  bcrypt.hash(this.password, null, null, (err, hash) => {
    if (err) return next(err);
    this.password = hash;
    next();
  })
})

module.exports = mongoose.model('User', userSchema);
