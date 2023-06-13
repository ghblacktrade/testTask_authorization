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

        await mailService.activationMail(email, `${}/api/activate/${activationLink}`)
        // send id email activate or not?
        const userTransferData = new UserTransferData(user)
        // here i get 2 tokens
        const tokens = TokenService.generateTokens({...userTransferData})

        await TokenService.saveDataToken(userTransferData.id, tokens.refreshToken)

        return { ...tokens, user: userTransferData }
    }

    // create activation link and check activation user
    async activate(activationLink) {

        const user = await User.findOne({acivationLink})

        if(!user) {

            throw new Error('This activation link is uncorrected')
        }

        user.isActivate = true
        await user.save()
    }

    async login(email, password) {

        const user = await User.findOne({email})

        if(!user) {

            throw new Error('Email not found')
        }

        const isPassCorrect = await bcrypt.compare(password, user.password)

        if (!isPassCorrect) {

            throw new Error('invalid password')
        }

        const userTransferData = new userTransferData()
        const tokens = TokenService.generateTokens({...userTransferData})

        await TokenService.saveDataToken(userTransferData.id, tokens.refreshToken)

        return { ...tokens, user: userTransferData }
    }

    async logout(refreshToken) {

        const token = await TokenService.removeToken(refreshToken)

        return token
    }

    async refresh(refreshToken) {

        if(!refreshToken) {

            throw new Error('Authorize error')
        }

        const userData = TokenService.validateRefreshToken(refreshToken)
        const tokenDataBase = await TokenService.findToken(refreshToken)

        if(!userData || !tokenDataBase) {

            throw new Error('Authorize error')
        }

        const userTransferData = new userTransferData()
        const tokens = TokenService.generateTokens({...userTransferData})

        await TokenService.saveDataToken(userTransferData.id, tokens.refreshToken)

        return { ...tokens, user: userTransferData }
    }

    async getAllUsers() {

        const users = await User.find()

        return users
    }

}

module.exports = new UserService