const express=require("express");
const userRouter=express.Router();
const {createUserLogin, loginUser}=require("../controllers/loginController")




userRouter.post("/register",createUserLogin);
userRouter.get("/login",loginUser);




module.exports= userRouter;