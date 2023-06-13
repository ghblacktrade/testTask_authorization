const userService = require('../services/userService')

class UserActionController {

    async login(request, response, next) {

        try {

            const {email, password} = request.body
            const userData = await userService.registration(email, password)
            // for save token in cookie, you need add day count
            response.cookie('refreshToken', userData.refreshToken, {maxAge: , httpOnly: true})

            // for save user side
            return response.json(userData)

        } catch (err) {

            console.log(err)
        }

    }

    async registration(request, response, next) {

        try {

        } catch (err) {

        }

    }

    async logout(request, response, next) {

        try {

        } catch (err) {

        }

    }

    async activate(request, response, next) {

        try {

        } catch (err) {

        }

    }

    async refresh(request, response, next) {

        try {

        } catch (err) {

        }

    }

    async users(request, response, next) {

        try {

            response.json(['Pasha is WORK'])

        } catch (err) {

        }

    }

}

module.exports = new UserActionController()