
import {con} from '../db/mydb.js'

const AddProductController = (req, res) => {
    const data = req.body;
  
    con.query("USE sales");
    con.query(
      "INSERT INTO Products (ProductName, CostPrice, SellingPrice, Quantity) VALUES (?, ?, ?, ?)",
      [data.ProductName, data.CostPrice, data.SellingPrice, data.Quantity],
      (err, results) => {
        if (err) {
          console.error('Error inserting data:', err);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          console.log('Data inserted successfully:', results);
          res.status(200).json({ message: 'Data sent' });
        }
      }
    );
  };
  const UpdateProductController=(req,res)=>{
    const data = req.body;
  
    con.query("USE sales");
    con.query('SET SQL_SAFE_UPDATES = 0');
    con.query(
      ` UPDATE Products SET CostPrice = ${data.CostPrice}, SellingPrice = ${data.SellingPrice}, Quantity = ${data.Quantity} WHERE ProductName = '${data.ProductName}';`,
      (err, results) => {
        if (err) {
          console.error('Error inserting data:', err);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          console.log('Data inserted successfully:', results);
          res.status(200).json({ message: 'Data sent' });
        }
      }
    );

  }
  const DeleteProductController=(req,res)=>{
    const data = req.body;
  
    con.query("USE sales");
    con.query('SET SQL_SAFE_UPDATES = 0');
    con.query(
      ` DELETE FROM Products WHERE ProductName = '${data.ProductName}';`,
      (err, results) => {
        if (err) {
          console.error('Error inserting data:', err);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          console.log('Data inserted successfully:', results);
          res.status(200).json({ message: 'Data sent' });
        }
      }
    );

  }
const ProductsGetController= (req,res)=>{
    con.query("use sales")
    con.query('DELETE FROM Products WHERE Quantity<0;');
    con.query(`select * from Products`,(err,results)=>{
        if(err)console.log("error occured")
        res.json(results)
    })

}
const ProductsSearchController=async (req,res)=>{
    const {name}=req.params
    con.query("use sales")
    con.query(`select * from Products where ProductName like '${name}%' `,(err,results)=>{
        if(err)console.log("error occured")
        
        console.log(results)
        res.json(results)
        


       
    })

    

}
export{ProductsGetController,ProductsSearchController,AddProductController,UpdateProductController,DeleteProductController}