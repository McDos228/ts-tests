export class Config {
    public static mongoConn = 'mongodb://localhost:27017/tsdb';
    public static port = process.env.PORT || 3000;
    public static secret = 'secret';
    public static mailAcc = {
        user: 'testnodecomputools@gmail.com', // generated ethereal user
        pass: 'Testpassword' // generated ethereal password
    }
}

export default Config