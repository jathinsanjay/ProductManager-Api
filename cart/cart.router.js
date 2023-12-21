import express from "express";
import { CartGetController,CartPostcontroller } from "./cart.controller.js";
const CartRouter=express.Router()
CartRouter.use("/get",CartGetController)
CartRouter.use("/post",CartPostcontroller)
export {CartRouter}