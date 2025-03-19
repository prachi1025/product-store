import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import { connectDB } from "./config/db.js"
import productRoutes from "./routes/product.routes.js"

dotenv.config()

const app = express()
const port = 3000

// app.use(express.json()) allows us to accept data in JSON in the req.body

app.use(bodyParser.urlencoded({ extended:true }))
//allows us to accept data in url form encoded in req.body

app.use("/products", productRoutes)

app.listen(port, () => {
    try {
        connectDB()
        console.log(`server started at ${port}`)
    } catch(error) {
        console.log("failed to start the server :", error.message)
    }
})