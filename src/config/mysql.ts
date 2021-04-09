import mysql from 'mysql2';

export default class Mysql{

    constructor() {
        const connection = mysql.createConnection({       
            host: process.env.MYSQL_DB_HOST,
            user: process.env.MYSQL_DB_USER,
            database: process.env.MYSQL_DB_PASSWORD
        });
    }


    
}