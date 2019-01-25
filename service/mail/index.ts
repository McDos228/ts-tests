import * as nodemailer from 'nodemailer';
import {Config} from '../../config';

export default class Emails {

    public static setMailObject({from = Config.mailAcc.user, to, subject, text}){
        let mailOptions = {
            from,
            to,
            subject,
            text
        }

        return mailOptions
    }

    public static async sendMail(mailData){
        try {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: Config.mailAcc.user,
                    pass: Config.mailAcc.pass
                },
                tls: { rejectUnauthorized: false }
            })

            return await transporter.sendMail(mailData);
            
        } catch (error) {
            console.log('aaaaa', error)
            return error
        }
    }
}