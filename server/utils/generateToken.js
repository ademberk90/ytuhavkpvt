import jwt from "jsonwebtoken";

const generateToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn: '1d'
    });
};

const verifyToken = (req, res, next) => {
    //console.log(req.session);
    const token = req.session.token;
    //console.log(req.session.token);
    if(!token){
        res.json({
            type: "error",
            message:"Token can not be empty",
            loggedIn: false
        });
    }
    else{
        jwt.verify(token, process.env.JWT_SECRET, (error, decode) => {
            if(error){
                res.json({
                    type:"error",
                    message:"Token expired or changed",
                    loggedIn: false
                })
            }
            else{
                next();
            }
        } )
    }
}

export {generateToken, verifyToken};