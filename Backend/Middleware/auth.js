const jwt=require('jsonwebtoken');


const auth=(req,res,next)=>{
    const token=req.header("Authorization");
    if(!token){
        return res.status(401).json({message:"unauthorized"})
    }
    try{
        const checkauth=jwt.verify(token,process.env.SECRET_KEY);
        req.user=checkauth;
        next();
    }catch(err){
        res.status(401).json({message:"unauthorized"})
    }

}

module.exports=auth;