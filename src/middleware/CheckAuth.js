import jwt from 'jsonwebtoken'
import User from '../Models/User.js';

const checkAuth = async (req, res, next) => {

    const { authorization } = req.headers

    let token;


    if (authorization && authorization?.startsWith('Bearer')) {

        try {


            token = authorization?.split(' ')[1];

            const decoded = jwt.decode(token, process.env.SECRET_WORD);

            req.user = await User.findById(decoded.id).select('-password -confirm -expireToken -tokenAuth -updatedAt -__v');

            return next()

        } catch (e) {
            const error = new Error("The token is invalid");
            return res.status(500).json({ msg: error.message });
        }
    }

    if (!token) {
        const error = new Error("The token is required");
        return res.status(403).json({ msg: error.message });
    }

    next()
}


export default checkAuth
