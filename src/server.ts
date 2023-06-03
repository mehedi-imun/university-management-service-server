// getting-started.js
import mongoose from 'mongoose'
import app from './app'
import dotenv from 'dotenv'
import logger from './shared/loger'
dotenv.config()

async function main() {
  try {
    await mongoose.connect(process.env.DB_CONNECTION as string)
    logger.info('db connect successfully')
    app.listen(process.env.PORT, () => {
      logger.info(`university app listening on port ${process.env.PORT}`)
    })
  } catch (error) {
    console.error('connect felid', error)
  }
}
main()
