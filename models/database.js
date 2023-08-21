const mysql = require("mysql")
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"asm_fashion_nodejs"
})
module.exports=db;






