import express, { Request, Response, Application } from 'express'
const app: Application = express()
import cors from 'cors'
import userRouter from './modules/user/user.router'
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// application router
app.use('/api/v1/users', userRouter)
app.get('/', async (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app
