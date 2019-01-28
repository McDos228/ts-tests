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
                    subject : 'Change password',
                    text : `Visit this url for change your password: http://${Config.host}:${Config.port}/auth/resetpass/${token}`
                })

                const sendedEmail = await Emails.sendMail(mailObj);
                await User.update({_id: user._id}, {resetToken : token});
                return sendedEmail
            }
        } catch (error) {
            console.log(error)
            return error
        }   
    }

    public static async resetPassowrd(token, password){
        try {

            let pass : number = bcrypt.hashSync(password, salt);

            const user = await User.findOne({resetToken : token});
            if(!user) 
                return {message:'no user found'};
            if(user.resetToken === null) 
                return {message:'auth error, you don`t have permition visit this page'};
            else
                return await User.update({resetToken : token}, {password: pass, resetToken : null});
        } catch (error) {
            return error
        }
    }
}