import jwt from "jsonwebtoken";

export default function generateJWT({ id }) {

    return jwt.sign({ id }, process.env.SECRET_WORD, {
        expiresIn: '15d'
    })

}
