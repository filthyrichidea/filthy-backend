const http = require("http")
const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const cors = require("cors")
require("dotenv").config({ path: "./backend/.env" })
const morgan = require("morgan")
const conectdb = require("./database/db")
// const sendMailToAll = require("./nodemailer/cornJob")
const port = process.env.PORT || 4000
const { notFound, errorHandler } = require("./middlewares/errorHandling")
const app = express()
app.use(cors({ origin: "*" }))
app.use(express.static(path.join(__dirname, "public")))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan("dev"))

conectdb()

const server = http.createServer(app)

app.get("/", (req, res) => {
  res.send("Welcome to mongoose")
})
// sendMailToAll()
app.use("/api/v1/", require("./routes/index"))

app.use(notFound)
app.use(errorHandler)
server.listen(port, (err) => {
  if (err) throw err
})

module.exports = app
