const mysql = require('mysql');
const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"colorfulcms"
})

conn.connect((err)=>{
    if(err) return err;
    console.log("資料庫連線成功!");
})

module.exports = conn;