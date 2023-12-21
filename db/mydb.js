import mysql from "mysql2"


const con = mysql.createConnection({
 
  user: "root",
  password:"root",
  host: "localhost",
  port:3306,

});


con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});


  export {con};