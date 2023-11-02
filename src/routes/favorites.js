const { postFav, deleteFav , getFav} = require("../controllers/handleFavorites");

const favoritesRouter=require("express").Router();


favoritesRouter.post("/post",postFav);
favoritesRouter.delete("/:id",deleteFav);
favoritesRouter.get("/",getFav);



module.exports= favoritesRouter;