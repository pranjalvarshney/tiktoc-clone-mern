const express = require("express")
const app = express()
const mongoose = require("mongoose")
const morgan = require("morgan")
require("dotenv").config()

//middlewares
app.use(morgan("dev"))
app.use(express.json())
app.use("/api", require("./routes/video"))

const Port = process.env.PORT

const uri = `mongodb+srv://${process.env.MONGO_DB}:${process.env.MONGO_PASS}@cluster0.zr541.mongodb.net/data?retryWrites=true&w=majority`
mongoose.connect(
  uri,
  { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("DB connected successfully")
    app.listen(Port, () => {
      console.log(`Server started ${Port}`)
    })
  }
)
