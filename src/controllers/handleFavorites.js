//var myFavorites=[]
const {Favorite}=require("../utils/DB_connection");


const postFav= async(req,resp)=>{
     console.log("post");
     const {id,name,origin,status,image,species,gender}=req.body;

     if(!name|| !origin ||!status||!image||!species||!gender)
          return resp.status(401).send("Faltan Datos")
     
     await Favorite.findOrCreate({where:{id,name,origin,status,image,species,gender}});

     const myFavorites = await Favorite.findAll();
     return resp.status(200).json(myFavorites);
}

const deleteFav=async (req,resp)=>{
     const {id}=req.params;

     await Favorite.destroy({where:{id:id}});

     const myFavorites= await Favorite.findAll();

     return resp.status(200).json(myFavorites);
     
}

const  getFav=async (req,res)=>{
     const myFavorites= await Favorite.findAll();
     return res.status(200).json(myFavorites)
}


module.exports={postFav,deleteFav,getFav};