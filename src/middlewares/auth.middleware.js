import jwt from "jsonwebtoken";


async function authArtist(req, res, next) {

    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ 
            message: "Unauthorized" 
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(decoded.role !== "artist") {
            return res.status(403).json({ 
                message: "You dont have access to this resource" 
            });
        }

        req.user = decoded;

        next();
    } catch (error) {

        return res.status(401).json({ 
            message: "Invalid token" ,
            error : error.message
        });
    }
}


async function authUser(req, res, next) {

    const token = req.cookies.token;

    if(!token) {
        return res.status(401).json({
            message : "Unauthorized acces"
        });
    }

    try {

        const decoded = jwt.verify(token,process.env.JWT_SECRET);

        if(decoded.role !== "user" && decoded.role !== "artist") {
            return res.status(403).json({
                message : "You dont have access to this resource"
            });
        }
        
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            message : "Invalid token",
            error : error.message
        });
    }
}

export default { authArtist, authUser };