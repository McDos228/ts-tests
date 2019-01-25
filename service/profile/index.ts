import {User} from '../../models/user';
import {Config} from '../../config';
import Emails from '../mail/';
import * as jwt from 'jsonwebtoken';

export default class ProfileService {

    public static async forgotPassword(userPayload) {
        try {
            let {email, _id} = userPayload.user;
            const user = await User.findOne({email});
            if(!user) return {message:'no user found'};
            else {
                const token = jwt.sign({name : user.name, email : user.email}, Config.secret);
                const mailObj = await Emails.setMailObject({
                    to : user.email,
                    subject: 'Change password',
                    text : `Visit this url : http://localhost${Config.port}/reset/${token}`
                })

                const sendedEmail = await Emails.sendMail(mailObj);
                await User.update({_id}, {resetToken : token});
                return sendedEmail
            }
        } catch (error) {
            console.log('dayn', error)
            return error
        }   
    }

    public static async resetPassowrd(token, password){
        try {
            const user = await User.findOne({resetToken : token});
            if(!user) 
                return {message:'no user found'};
            else
                return await User.update({resetToken : token}, {password});
        } catch (error) {
            return error
        }
    }

}