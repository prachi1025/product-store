import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"

dotenv.config()

const app = express()
const port = 3000

app.get("/products", (req, res) => {

})

console.log(process.env.MONGO_URI)

app.listen(port, () => {
    try {
        connectDB()
        console.log(`server started at ${port}`)
    } catch(error) {
        console.log("failed to start the server :", error)
    }
})