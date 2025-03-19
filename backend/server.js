import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import { connectDB } from "./config/db.js"
import { Product } from "./models/product.model.js"

dotenv.config()

const app = express()
const port = 3000

// app.use(express.json()) allows us to accept data in JSON in the req.body

app.use(bodyParser.urlencoded({ extended:true }))
//allows us to accept data in url form encoded in req.body

app.post("/products", async (req, res) => {
    const product = req.body

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success:false, message: "Please provide all fields" })
    }

    const newProduct = new Product(product)

    try {
        await newProduct.save()
        res.status(201).json({ success:true, data:newProduct })
    } catch(error) {
        console.log("error while creating new product: ", error.message)
        res.status(500).json({ success:false, message:"server error"})
    }
})

console.log(process.env.MONGO_URI)

app.listen(port, () => {
    try {
        connectDB()
        console.log(`server started at ${port}`)
    } catch(error) {
        console.log("failed to start the server :", error.message)
    }
})