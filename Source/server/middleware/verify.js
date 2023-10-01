import jwt from "jsonwebtoken"
import { sendError, sendServerError } from "../helper/client.js"


/**
 * header contain
 * Authorised : token
 */
export const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers['x-access-token']
        // decode token
        if (token) {
            // verifies secret and checks exp
            jwt.verify(token, "publicKey", async function (err, decoded) {
                if (err) {
                    return sendError(res, 'jwt expired.', 401)
                } else {
                    console.log(`decoded`, decoded);
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
            return sendError(res, 'No token provided', 401)
        }
    } catch (error) {
        console.log(error);
        return sendError(res, 'No token provided.', 401)
    }
}

export const verifyRefreshToken = async (refreshToken) => {

}

export const verifyAdmin = async (req, res, next) => {
    const role = req.decoded.role;
    if (role != null && role != undefined){
        if (req.decoded.role !== 'admin') {
            return sendError(res, 'Forbidden.', 403)
        }  
    } 
    else {
        return sendError(res, 'Forbidden.', 403)
    }
    
    next()
}