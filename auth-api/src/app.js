require("dotenv").config()

const express = require("express")
const authRoutes = require("./routes/auth.routes")

const app = express()


app.use(express.json())

app.use("/auth", authRoutes)

const PORT = 5000

app.listen(PORT, () => {
    console.log(`server runing at localhost:${PORT}`)
})