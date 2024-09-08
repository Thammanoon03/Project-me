const { error } = require("console")

const mysql = reqire('mysql')

const connection = mysql.createConnection({
    host:"localhost",
    user: "root",
    password : "",
    database : "node_crud_db",
    port: '3306'
})

connection.connect((error)=>{
    if (!!error) {
        console.log(error)
    }else{
        console.log("connection......")
    }
})

module.exports = connection ;