import {Config} from '../config';
import * as jwt from 'jsonwebtoken';

export class AuthHelper {
    public static async isAuth(req, res, next){
        if (!req.headers && !req.headers.token)
		return res.status(401).json({ message: 'Unauthorized user!' });
        jwt.verify(req.headers.token, Config.secret, (err, decode) => {
            if (err) return res.status(401).json({ message: 'Unauthorized user!' });
            req.user = decode;
            next();
        });
    }
}