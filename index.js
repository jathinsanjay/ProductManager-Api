import express, { json } from "express";
import {ProductsRouter} from './products/products.router.js'
import { CartRouter } from "./cart/cart.router.js";
import cors from "cors";
import { DashRouter } from "./dashboard/dashboard.router.js";
const app=express()
app.use(cors())
app.use(express.json())


app.get('/',(req,res)=>{
    console.log("hello")
    res.send("api is working")
})
app.use('/products',ProductsRouter)
app.use('/cart',CartRouter)
app.use('/dash',DashRouter)
app.listen(9000,()=>{
    console.log("server is running at port 9000")
})