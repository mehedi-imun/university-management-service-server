import express from 'express'
const router = express.Router()
import userController from './user.controller'
router.post('/create-user', userController.createUser)

export default router
