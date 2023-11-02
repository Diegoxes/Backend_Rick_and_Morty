
const {User}=require("../utils/DB_connection")






const createUserLogin=async (req,res)=>{
    const {email , password}=req.body;

    const newUser= await User.findOrCreate({where:{email:email,password:password}})

    return res.status(200).json(newUser);
    
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.query;

        
        const userSearch = await User.findOne({ where: { email: email, password: password } });

        if (userSearch) {
            
            res.status(200).json({ message: 'Usuario encontrado', user: userSearch ,access:true});
        } else {
            
            res.status(403).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
       
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};






module.exports= {createUserLogin,loginUser}