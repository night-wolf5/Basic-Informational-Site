const express = require("express")
const sendFIleFromStatic = require("./sendFromStatic")
const route = require("./router")

const app = express()

app.use(express.static("./public"))
app.use(sendFIleFromStatic)

app.use("/", route)

app.listen(8000)
