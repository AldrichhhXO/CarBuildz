let mysql = require('mysql')


module.exports.connection = mysql.createConnection({
    user: process.env.DB_USER || process.env.DEV_USER,
    password: process.env.PASSWORD || process.env.DEV_PASSWORD
});