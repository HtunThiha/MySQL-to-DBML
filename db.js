require('dotenv').config();

const dbSetting = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    printDetails: function() {
        console.log(`\nYour database details:\n
host: ${this.host}
port: ${this.port}
user: ${this.user}
password: ${this.password}
database: ${this.database}\n`);
    }
}

dbSetting.printDetails();

module.exports = dbSetting;