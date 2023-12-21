import { con } from '../db/mydb.js';

const DailyProfitController=(req,res)=>{
    con.query("use sales")
    con.query("select sum(profit) as TotalDayProfit from stats where date(dateof)=curdate()",(err,results)=>{
        if(err){
            res.status(500)
        }
        res.json(results)
    })
}
const MonthSalesController=(req,res)=>{
    con.query("use sales")
    con.query("select sum(sales) as TotalMonthSales from stats where month(dateof)=month(curdate()) and year(dateof)=year(curdate())",(err,results)=>{
        if(err){
            res.status(500)
        }
        res.json(results)
    })
    


}

const DailySalesController=(req,res)=>{
    con.query("use sales")
    con.query("select sum(sales) as TotalDailySales from stats where date(dateof)=curdate()",(err,results)=>{
        if(err){
            res.status(500)
        }
        res.json(results)
    })
    

}
const MonthlyProfitController=(req,res)=>{
    con.query("use sales")
    con.query("select sum(profit) as TotalMonthProfit from stats where month(dateof)=month(curdate()) and year(dateof)=year(curdate())",(err,results)=>{
        if(err){
            res.status(500)
        }
        res.json(results)
    })
}
export {DailyProfitController,MonthlyProfitController,MonthSalesController,DailySalesController}