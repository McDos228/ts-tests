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
                password,
                role: 'user'
            })
        } catch (error) {
            return error
        }
    }

    public static async signIn ({name, password}) {
        try {
            const user = await User.findOne({name});
            if(!user) return {message:'no user found'};
            if (bcrypt.compareSync(password, user.password))
                return {
                    name : user.name,
                    token : jwt.sign({user}, Config.secret)
                }
            else 
                return {message:'password not equal'};
        } catch (error) {
            return error
        }   
    }
}