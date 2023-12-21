import express from 'express'
import {DailyProfitController,MonthlyProfitController,DailySalesController,MonthSalesController} from './dashboard.controller.js'
const DashRouter=express.Router() 
DashRouter.use('/dailyprofit',DailyProfitController)
DashRouter.use('/monthlyprofit',MonthlyProfitController)
DashRouter.use('/dailysales',DailySalesController)
DashRouter.use('/monthlysales',MonthSalesController)
export{DashRouter}

