import express from "express";
import {ProductsGetController,ProductsSearchController,AddProductController, UpdateProductController,DeleteProductController} from './products.controller.js'
const ProductsRouter =express.Router()
ProductsRouter.use('/productsList',ProductsGetController)
ProductsRouter.use('/productsSearch/:name',ProductsSearchController)
ProductsRouter.use('/addproduct',AddProductController)
ProductsRouter.use('/updateproduct',UpdateProductController)
ProductsRouter.use('/deleteproduct',DeleteProductController)

export {ProductsRouter}