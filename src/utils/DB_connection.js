require('dotenv').config();
const {Sequelize}= require("sequelize");
const {DB_USER,DB_PASSWORD, DB_HOST}=process.env;

const favoriteModel = require("../models/Favorite");

const userModel = require("../models/Usuarios.js");


const URL= `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`;
const sequelize=new Sequelize(
    URL,
    {logging:false,native:false}
);

favoriteModel(sequelize);
userModel(sequelize);

const {User,Favorite}=sequelize.models;

User.belongsToMany(Favorite, { through: "user_favorite" , timestamps:false });
Favorite.belongsToMany(User, { through: "user_favorite",timestamps:false });

module.exports={
    sequelize,
    ...sequelize.models
}