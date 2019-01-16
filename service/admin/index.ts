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

    public static async updateItem(target, data){
        try {
            return target == 'task'? await Task.update(data) : await User.update(data)
        } catch (error) {
            return error
        }
    }

    public static async deleteItem(target, id){
        try {
            return target == 'task'? await Task.deleteOne({_id:id}) : await User.deleteOne({_id:id})
        } catch (error) {
            return error
        }
    }
}