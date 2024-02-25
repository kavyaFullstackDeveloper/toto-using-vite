const { json } = require("body-parser");
const usermodel = require("../models/usermodel")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const registerUser = async function(req, res){
    const salt  = await bcrypt.genSalt(10)
     const hash = await bcrypt.hash(req.body.password, salt);

    const  user = new  usermodel({
        userName: req.body.userName,
        email: req.body.email,
        password: hash, 
    })
    await user.save();

    return res.status(201).send({message: "user registered successfully."})
}

const loginUser = async function(req, res){
    try{
      const user = await usermodel.findOne({
        email: req.body.email,  
      })
      const validPassword = await bcrypt.compare(req.body.password)
      const token = jwt.sign({
        _id: user._id,  
      }, process.env.TOKEN_SECRETE)   

    res.header("auth-token", token).json({message: "login is successful", token});
    }



    catch{
      res.status(400).send({message: "error in login "})
    }
}

module.exports.registerUser = registerUser;
module.exports.loginUser = loginUser; 
