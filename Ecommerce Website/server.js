import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDb from './config/db.js'
import authRoutes from './routes/authRoute.js'
import cors from 'cors'
import catergoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'

//config env
dotenv.config()

//database config
connectDb()

//rest object
const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//port
const port = process.env.PORT || 8080

//routes
app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/category", catergoryRoutes)
app.use("/api/v1/product", productRoutes)

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

//listen
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})