import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './Database/dbconfig.js'
import userrouter from './Routers/user.router.js'

dotenv.config()
 const port=process.env.PORT
const app = express()
app.use(cors())
app.use(express.json())

connectDB()
app.use('/api/user',userrouter)
app.listen(port, () => {
    console.log("App is listening in the port-", port);
})