//import du modèle
const Articles = require('../models/Articles');

//permet d'ajouter un article
exports.createArticle = (req, res, next) => {
  const articleObject = JSON.parse(req.body.article);
  delete articleObject._id;
  const article = new Articles({
    ...articleObject,
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
    // initialise like et dislikes à 0
    likes : 0, 
    dislikes : 0,
    // initialise les tableaux 
    usersLiked : [],
    usersDisliked : [],
  });
  article.save()
    .then(() => res.status(201).json({message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({error}));
};

//permet a tous les utilisateurs de voir tous les articles
exports.getAllArticles = (req, res, next) => {
  Articles.find()
    .then(articles => res.status(200).json(articles))
    .catch(error => res.status(400).json({error}));
};

//permet aux utilisateurs d'utiliser le mode Like
exports.likeStatus = async (req, res, next) => {

    const likeValue = req.body.like; 
    const userID = req.body.userId;
    const ArticleID = req.params.id; 
    
    try {
      const article = await Articles.findOne({ _id : ArticleID }) // juste un bug sur le compteur 
      switch (likeValue) {
        
        // Like
        case 1: 
          if (!article.usersLiked.includes(userID) ) {
            await Articles.updateOne(
              { _id: ArticleID }, 
              { $push: { usersLiked : userID }, $inc: { likes : 1 } }
            )
            res.status(200).json( {message : "Like !"}); 
            break;
          }
        
          // Dislike
          case -1: 
          if (!article.usersDisliked.includes(userID) ) {
            await Articles.updateOne(
              { _id: ArticleID }, 
              {$push: { usersDisliked : userID }, $inc: { dislikes : 1 } }
            )
            res.status(200).json( {message : "Dislike !"});
            break;
          }
    
          // Cancel Like
          case 0: 
          if (article.usersLiked.includes(userID) ) {
            await Articles.updateOne(
              { _id: ArticleID }, 
              {$pull: { usersLiked : userID }, $inc: { likes : -1 } }
            )
            res.status(200).json( {message : "Cancel Like !"}); 
            break;
          }
    
          // Cancel Dislike 
          case 0: 
          if (article.usersDisliked.includes(userID) ) {
             await Articles.updateOne(
              { _id: ArticleID }, 
              {$pull: { usersDisliked : userID }, $inc: { dislikes : -1 } }
            )
            res.status(200).json( {message : "Cancel Dislike !"}); 
            break;
          }
          default : 
          res.status(400).json( {error : "Une erreur est arrivée !"});
    
      } // fin switch
    } // fin try 

    catch (error) { res.status(400).json( { error } );}
        
}