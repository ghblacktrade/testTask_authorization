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

    validateAccessToken(token) {

        try {

            const userData = jwt.verify(token, process.env.JWT_ACCES_TOKEN)

            return userData

        } catch (err) {

            return null
        }
    }

    validateRefreshToken(token) {

        try {

            const userData = jwt.verify(token, process.env.JWT_REFRESH_TOKEN)

            return userData

        } catch (err) {

            return null
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

    async removeToken(refreshToken) {

        const tokenData = await Token.deleteOne({refreshToken})

        return tokenData
    }

    async findToken(refreshToken) {

        const tokenData = await Token.findOne({refreshToken})

        return tokenData
    }
}

module.exports = new TokenService()