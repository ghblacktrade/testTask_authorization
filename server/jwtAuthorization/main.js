const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const PORT = 5001
const app = express()

app.listen(PORT, () => console.log(`Pasha server start on port ${PORT}`))