const ProductGetServices= (req,res)=>{con.query("use sales")
con.query(`select * from Products`,(err,results)=>{
    if(err)console.log("error occured")
    res.json(results)
})}