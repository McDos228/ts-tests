import {User} from '../../models/user';
import * as bcrypt from 'bcryptjs';
import {Config} from '../../config'
import * as jwt from 'jsonwebtoken';
const salt = bcrypt.genSaltSync(10);

export default class Auth {

    public static async signUp (data) {
        try {
            let password : number = bcrypt.hashSync(data.password, salt);
            return await User.create({
                name : data.name,
                password
            })
        } catch (error) {
            return error
        }
    }

    public static async signIn ({name, password}) {
        try {
            const user = await User.findOne({name});
            console.log(user)
            if (user && bcrypt.compareSync(password, user.password)) 
                return {
                    name : user.name,
                    token : jwt.sign({user}, Config.secret)
                }
            else 
                return {message:'no user found'}    
        } catch (error) {
            return error
        }   
    }
}