import { con } from '../db/mydb.js';


const CartGetController = (req, res) => {

  con.query("use sales");
  con.query("delete from cart where Quantity=0")
  con.query(`select * from cart`, (err, results) => {
    if (err) console.log("error occurred");
    res.json(results);
  });
};

const CartPostcontroller = async (req, res) => {
  try {
    con.query('USE sales');
    con.query('DELETE FROM cart WHERE ProductID > 0;');

    const data = req.body;

    await Promise.all(data.map((item) => {
      return new Promise((resolve, reject) => {
        con.query('USE sales');
        con.query('SET SQL_SAFE_UPDATES = 0');
        con.query(`UPDATE Products
        SET Quantity=Quantity-${item.Quantity}
        WHERE ProductID=${item.ProductID};
        `)
       

        con.query(
          'INSERT INTO cart (ProductID, ProductName, SellingPrice, Profit, Quantity) VALUES (?, ?, ?, ?, ?)',
          [item.ProductID, item.ProductName, item.SellingPrice, item.Profit, item.Quantity],
          (err, result) => {
            if (err) {
              console.error('Database insertion error:', err);
              reject(err);
            } else {
              console.log('Inserted into database:', result);
              resolve(result);
            }
          }
        );
        con.query('DELETE FROM cart WHERE Quantity=0;');
      
      });
    }
    
    ));
    con.query(`insert into stats (profit,sales) values ((select sum(TotalProfit) from cart),(select sum(Total) from cart))`)
    res.status(200).json({ message: "data sent" });
  } catch (error) {
    console.error('Internal Server Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export { CartGetController, CartPostcontroller };
