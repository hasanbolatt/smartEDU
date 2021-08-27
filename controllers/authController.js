const User = require('../models/User');
const bcrypt = require('bcrypt');

//Ekleme
exports.createUser = async (req, res) => {
  try {
  const user = await User.create(req.body);
  
    res.status(201).json({
      status: 'succes',
      user,
    });
  } catch(error) {
    res.status(400).json({
      status: 'fail',
      error,
     });
  }
}

//Giriş
exports.loginUser = async (req, res) => {
  try {
    const {email, password} = req.body;

    await User.findOne({email:email},(err, user) => {
      if(user){ 
        bcrypt.compare(password, user.password, (err, same) => {
          if(same){
            res.status(200).send('Giriş işlemi başarılı');
          }
        })
      }
    })

  } catch(error) {
    res.status(400).json({
      status: 'fail',
      error,
     });
  }
}