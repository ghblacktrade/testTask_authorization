const Router = require('express').Router
const userActionController = require('../actionsControllers/userActionController')
const {body} = require('express-validator')

const router = new Router()

router.post('/login', userActionController.login)
router.post('registration',
    body('email').isEmail(),
    body('password').isLength({min: 5, max: 25}),
    userActionController.registration)
router.post('/logout', userActionController.logout)
router.get('/activate/:link', userActionController.activate)
router.get('/refresh', userActionController.refresh)
router.get('/users', userActionController.users)

module.exports = router