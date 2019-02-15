import * as nodemailer from 'nodemailer';
import {Config} from '../../config';

export default class Emails {

    public static setMailObject({from = Config.mailAcc.user, to, subject, text}){
        let mailOptions = {
            from,
            to,
            subject,
            text,
            html:
                '<p><b>Hello</b> to myself <img src="cid:note@example.com"/></p>' +
                '<p>Here\'s a nyan cat for you as an embedded attachment:<br/><img src="cid:nyan@example.com"/></p>',

                attachments: [
                    {
                        filename: 'nyan cat ✔.gif',
                        path: __dirname + '/nyan.gif',
                        cid: 'nyan@example.com'
                    }
                ],
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