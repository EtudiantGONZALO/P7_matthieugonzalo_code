//import du logiciel npm
const mysql = require('mysql');
const MySQLSchema = require("mysql-schema");

//schéma d'une sauce
MySQLSchema.getSchema({
  id: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  likes: { type: Number, required: true },
  dislikes: { type: Number, required: true },
  usersLiked: { type: Array, required: true },
  usersDisliked: { type: Array, required: true },
});

//exportation du schéma
MySQLSchema.stringifyFn('Articles', MySQLSchema);