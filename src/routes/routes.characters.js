//RUTAS DE CHARACTER USAREMOS ROUTER DE EXPRESS
//TODAS LAS REQ QUE LLEGUEN A ESTE ARCHIVO TIENEN  EL /CHARACTERS IMPLICITO 
const express=require("express");
const characterRouter=express.Router();    //un punto es en la misma carpeta , dos puntos salir de la carpeta
const getCharById=require("../controllers/getCharById")


characterRouter.get("/:id",getCharById)


module.exports=characterRouter;
