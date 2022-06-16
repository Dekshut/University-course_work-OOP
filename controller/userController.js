const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {validationResult} = require("express-validator")
const errorHandler = require('../utils/errorHandler')
const User = require('../model/user')
const keys = require('../config/keys')

class UserController{
    async login (req, res) {
        const candidate = await User.findOne({where:
            {email : req.body.email}})
        if(candidate){
            const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
            if (passwordResult){
                const token = jwt.sign({
                    email: candidate.email,
                    userId: candidate.id,
                    //эксперементальное поле
                    role: candidate.isAdmin
                }, keys.jwt ,{expiresIn: 60 * 60})
                res.status(200).json({
                    token: `Bearer ${token}`
                })
            } else {
                res.status(401).json({
                    message: 'Uncorrect password'
                })
            }
        } else {
            res.status(404).json({
                message: 'User with this email not found'
            })
        }
    }

    async register (req, res) {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({
                message: "Invalid data entered"
            })
        }
        const candidate = await User.findOne({where:
            {email : req.body.email}})
        if(candidate){
            res.status(409).json({
                message: 'User with this email already exist'
            })
        } else {
            try{
                const salt = bcrypt.genSaltSync(10)
                const password = req.body.password
                const user = await User.create({
                        email : req.body.email,
                        password : bcrypt.hashSync(password, salt)
                    })
                res.status(201).json(user)
                } catch(error){
                    errorHandler(res, error)
                }
        }
    }
}

module.exports = new UserController