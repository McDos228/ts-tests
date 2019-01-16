import {Task} from '../../models/task';
import {User} from '../../models/user';
import * as bcrypt from 'bcryptjs';
const salt = bcrypt.genSaltSync(10);

export default class AdminHelper {

    public static async listItems(target){
        try {
            return target == 'task'? await Task.find() : await User.find()            
        } catch (error) {
            return error
        }
    }

    public static async addItem(target, data){
        try {
            let password : number = bcrypt.hashSync(data.password, salt);
            return target == 'task'? 
                await Task.create(data) : 
                await User.create({
                    name : data.name,
                    password
                })
        } catch (error) {
            return error
        }
    }
}