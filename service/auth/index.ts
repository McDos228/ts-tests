import {User} from '../../models/user';

export default class Auth {

    public static async signUp (data) {
        await User.create(data)
    }

    public static async signIn (name) {
        await User.findOne({name})
    }

}