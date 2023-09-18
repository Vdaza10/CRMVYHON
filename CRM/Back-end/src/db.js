import  {createPool}  from "mysql2/promise";

// crea la conexión a la base de datos 
export const pool  =  createPool ( { 
    host : '127.0.0.1', 
    user : 'root' , 
    port :3306,
    database:'crmvyhon',
    password:''
} ) ;

export const Secret = "ClAVESUPERSECRETA"