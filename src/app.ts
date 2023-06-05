import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import userRouter from './modules/user/user.router'
const app: Application = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// application router
app.use('/api/v1/users', userRouter)
app.get('/', async (req: Request, res: Response) => {
  console.log(req)
  res.send('Hello World!')
})

export default app
