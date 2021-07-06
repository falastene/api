//rquire for mysql2
const mysql = require('mysql2/promise');


module.exports = db = {};

connection()

async function connection() {
    var dbconnection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "propro2001",
        database: "falastene",
        multipleStatements: true
    })

    db.connection = dbconnection;
}