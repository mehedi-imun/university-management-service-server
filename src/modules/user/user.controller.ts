import { RequestHandler } from 'express'
import userService from './user.service'
import { z } from 'zod'
const createUser: RequestHandler = async (req, res, next) => {
  try {
    const createUserZodSchema = z.object({
      body: z.object({
        role: z.string({
          required_error: 'role is required',
        }),
        password: z.string().optional(),
      }),
    })
    await createUserZodSchema.parseAsync(req)
    const result = await userService.createUserService(req.body.user)
    res.status(200).json({
      success: true,
      data: result,
    })
  } catch (error) {
    next(error)
  }
}
export default {
  createUser,
}
