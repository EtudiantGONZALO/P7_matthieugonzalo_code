//import des logiciel npm
const mysql = require('mysql');
const MySQLSchema = require("mysql-schema");

//schéma d'une identité
MySQLSchema.getSchema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});


//exportation du schéma
MySQLSchema.stringifyFn('User', MySQLSchema);