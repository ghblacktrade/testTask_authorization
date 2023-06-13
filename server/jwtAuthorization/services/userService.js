const User = require('../models/userSchema')
const uuid = require('uuid')
const mailService = require('./mailService')
const TokenService = require('./tokenService')
const UserTransferData = require('../transfer/userTransferData')

// logical for controllers, registration logical and encryption password,
// add link users for confirmation acaunt

class UserService {

    async registration(email, password) {

        const person = await User.find({email})

        if(person) {
            throw new Error(`This ${email} is invalid or already taken`)
        }

        // here need set hash for password with bcrypt and send in user{email, password: hash}
        const activationLink = uuid.v4() // random unique string
        const user = await User.create({email, password, activationLink})

        await mailService.activationMail(email, activationLink)
        // send id email activate or not?
        const userTransferData = new UserTransferData(user)
        // here i get 2 tokens
        const tokens = TokenService.generateTokens({...userTransferData})

        await TokenService.saveDataToken(userTransferData.id, tokens.refreshToken)

        return { ...tokens, user: userTransferData }
    }
}

module.exports = new UserService