//import du logiciel npm
const mongoose = require('mongoose');

//schéma d'une sauce
const articleSchema = mongoose.Schema({
  userId: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  likes: { type: Number, required: true },
  dislikes: { type: Number, required: true },
  usersLiked: { type: Array, required: true },
  usersDisliked: { type: Array, required: true },
});

//exportation du schéma
module.exports = mongoose.model('Articles', articleSchema);