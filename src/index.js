//const http = require("http");
require("dotenv").config();
const { PORT } = process.env
const getCharById = require("./controllers/getCharById.js");
const characterRouter=require("./routes/routes.characters");
const userRouter=require("./routes/routes.user")
const favoritesRouter=require("./routes/favorites.js")
const express = require('express');
const server = express();
const cors= require("cors");

//base de datos
const { sequelize } = require("./utils/DB_connection");

server.use(cors())
//MIDLEWARE 
server.use(express.json())// para poder recibir JSON POR REQ.BODY

//MIDLEWARE PERMISOS

/*server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });*/




//MIDLEWARE ROUTERS
server.use("/character",characterRouter);
server.use("/user",userRouter);
server.use("/favorites",favoritesRouter);
server.get("/health-check/:id",getCharById)  /*/ruta es la ruta en la cual se activará este controlador cuando se reciba una solicitud GET en esa ruta.
(req, res) son los parámetros de la función de controlador. req es un objeto que representa la solicitud HTTP entrante y res es un objeto que se utiliza para enviar la respuesta HTTP.*/

server.listen(PORT, () => {
    sequelize.sync({alter:true});
   console.log('Server raised in port: ' + PORT);
});

/*http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes("onSearch")){
        const id=req.url.split("/").at(-1);
        getCharById(res,id);

    }

    if(req.url.includes("detail")){
        const id=req.url.split("/").at(-1);
        getCharById(res,id);
    }
}).listen(PORT, () => {
    console.log("Running")
})*/


/* if (req.url.includes("/rickandmorty/character")) {
       const id = req.url.split("/").at(-1)
       const character = data.find(element => element.id === Number(id));
       
       if (character) {
           return res.writeHead(200, { "Content-type": "application/json" })

               .end(JSON.stringify(character))
       }
       else {
           return res.writeHead(404, { "Content-type": "application/json" })
           .end(JSON.stringify({ msg: "NoT Found", error: `The character with the id ${id} was not found` }))
       }

   }*/