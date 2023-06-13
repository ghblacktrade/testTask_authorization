const jwt = require('jsonwebtoken')
const Token = require('../models/tokenSchema')

class TokenService {

    generateTokens(payload) {

        const accessToken = jwt.sign(payload, process.env.JWT_ACCES_TOKEN, {expiresIn: '15m'})
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_TOKEN, {expiresIn: '25d'})

        return {

            accessToken,
            refreshToken
        }
    }

// for our token for saving in database by user id and check this token inside database
    async saveDataToken(userId, refreshToken) {

        const tokenData = await Token.findOne({user: userId})

        if (tokenData) {

            tokenData.refreshToken = refreshToken

            return tokenData.save()
        }

        const tokenSave = await Token.create({user: userId, refreshToken})

        return tokenSave
    }
}

module.exports = new TokenService()