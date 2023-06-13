require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const router = require('./routes/routes')

const PORT = process.env.PORT || 5001
const app = express()

app.use(express.json())
app.use('/api', router)


const dev = async () => {

    await mongoose.connect(process.env.DB_URL, {

    })
}
app.listen(PORT, () => console.log(`Pasha server start on port ${PORT}`))