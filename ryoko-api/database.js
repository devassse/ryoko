const mysql = require('mysql')
const dotenv = require("dotenv")

dotenv.config()

let connection = mysql.createConnection({
    host: process.env.DATA_BASE_HOST,
    database: process.env.DATA_BASE_NAME,
    user: process.env.DATA_BASE_USER,
    password: process.env.DATA_BASE_PASS,
})

connection.connect((err) => {
    if(err){
        throw err
    }
    else{
        console.log("Database connected success!!");
    }
})

module.exports = connection