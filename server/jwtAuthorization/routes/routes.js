const Router = require('express').Router
const userActionController = require('../actionsControllers/userActionController')

const router = new Router()

router.post('/login', userActionController.login)
router.post('registration', userActionController.registration)
router.post('/logout', userActionController.logout)
router.get('/activate/:link', userActionController.activate)
router.get('/refresh', userActionController.refresh)
router.get('/users', userActionController.users)

module.exports = router