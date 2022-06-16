const passport = require('passport')
const keys = require('../config/keys')
const User = require('../model/user')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt


const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: keys.jwt
}

module.exports = passport => {
    passport.use(
        new JwtStrategy(options, async (payload, done) => {
            try {
                const user = await User.findByPk(payload.userId)
                if(user && user.isAdmin){
                    done(null, user)
                } else {
                    done(null, false)
                }
            } catch (error) {
                console.log(error)
            }
        })
    )
}