require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 5001
const app = express()

app.listen(PORT, () => console.log(`Pasha server start on port ${PORT}`))