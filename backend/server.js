import express from 'express'
import cors from 'cors'
import 'dotenv/config' 
import connectDB from './configs/mongodb.js'
import { Webhook } from 'svix'
import { clerkWebhooks } from './controllers/Webhooks.js'

const app = express()

await connectDB()

// Connection of Backend with Other Domain
app.use(cors())

app.get('/', (req, res) => {
  res.send("Hello World!")
})

app.post('/clerk', express.json(), clerkWebhooks)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on PORT : ${PORT}`)
})