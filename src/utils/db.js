
require('dotenv').config({ path: 'process.env' });

const mysql=require('mysql');
const connection=mysql.createConnection({
  host:process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DATABASE,
  port: process.env.DB_PORT,
});

connection.connect(function(error){
  if(!!error){
    console.log(error);
  }else{
    console.log('Connected to database!:)');
  }
});  

module.exports = connection; 

