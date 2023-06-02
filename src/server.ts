// getting-started.js
import mongoose from 'mongoose'
import app from './app'
import dotenv from 'dotenv'
dotenv.config()

async function main() {
  try {
    await mongoose.connect(process.env.DB_CONNECTION as string)
    console.log('db connect successfully')
    app.listen(process.env.PORT, () => {
      console.log(`university app listening on port ${process.env.PORT}`)
    })
  } catch (error) {
    console.log('connect felid', error)
  }
}
main()
