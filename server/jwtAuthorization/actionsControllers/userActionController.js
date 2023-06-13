const userService = require('../services/userService')
const {validationResult} = require('express-validator')


class UserActionController {

    async login(request, response, next) {

        try {

            const {refreshToken} = request.cookies
            const token = await userService.logout(refreshToken)
            response.clearCookie('refreshToken')

            return response.json(token)

        } catch (err) {

            console.log(err)
        }

    }

    async registration(request, response, next) {

        try {

            const error = validationResult(request)
            if (!error.isEmpty()) {

                return next(err)
            }
            const {email, password} = request.body
            const userData = await userService.registration(email, password)
            // for save token in cookie, you need add day count
            response.cookie('refreshToken', userData.refreshToken, {maxAge:, httpOnly: true})

            // for save user side
            return response.json(userData)

        } catch (err) {

            console.log(err)
        }

    }

    async logout(request, response, next) {

        try {

        } catch (err) {

        }

    }

    async activate(request, response, next) {

        try {

            const activationLink = request.params.link
            await userService.activate(activationLink)
// add client url redirect user to front
            return response.redirect('')
        } catch (err) {

        }

    }

    async refresh(request, response, next) {

        try {

            const {refreshToken} = request.cookies
            const userData = await userService.refresh(refreshToken)

            response.cookie('refreshToken', userData.refreshToken, {maxAge:, httpOnly: true})

            return response.json(userData)

        } catch (err) {

        }

    }

    async users(request, response, next) {

        try {

            const users = await userService.getAllUsers()

            return response.json(users)

        } catch (err) {

        }

    }

}

module.exports = new UserActionController()