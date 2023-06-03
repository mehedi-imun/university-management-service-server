import { Request, Response } from 'express'
import userService from './user.service'
const createUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.createUserService(req.body.user)
    res.status(200).json({
      success: true,
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}
export default {
  createUser,
}
