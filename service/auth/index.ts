import {User} from '../../models/user';
import * as bcrypt from 'bcryptjs';
import {Config} from '../../config';
import Emails from '../mail/';
import * as jwt from 'jsonwebtoken';
const salt = bcrypt.genSaltSync(10);

export default class Auth {

    public static async signUp (data) {
        try {
            let password : number = bcrypt.hashSync(data.password, salt);
            return await User.create({
                name : data.name,
                email : data.email,
                password,
                role: 'admin',
                resetToken: null
            })
        } catch (error) {
            return error
        }
    }

    public static async signIn ({email, password}) {
        try {
            const user = await User.findOne({email});
            if(!user) return {message:'no user found'};
            if (!bcrypt.compareSync(password, user.password))
                return {message:'password not equal'}
            else if (bcrypt.compareSync(password, user.password)){
                const mailObj = await Emails.setMailObject({
                    to : user.email,
                    subject: 'Sucessful registration',
                    text : 'You are successfully registred on our cool web site, yopta'
                })

                await Emails.sendMail(mailObj);
                return {
                    name : user.name,
                    token : jwt.sign({user}, Config.secret)
                }
            }
        } catch (error) {
            return error
        }   
    }

    public static async forgotPassword(email) {
        try {
            const user = await User.findOne({email});
            if(!user) return {message:'no user found'};
            else {
                const token = jwt.sign({name : user.name, email : user.email}, Config.secret);
                const mailObj = await Emails.setMailObject({
                    to : user.email,
                    subject: 'Change password',
                    text : `Visit this url : http://localhost${Config.port}/reset/${token}`
                })

                await Emails.sendMail(mailObj);
            }
        } catch (error) {
            console.log('dayn', error)
            return error
        }
        
    }
}