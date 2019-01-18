import {Task} from '../../models/task';
import {User} from '../../models/user';
import * as bcrypt from 'bcryptjs';
const salt = bcrypt.genSaltSync(10);

export default class AdminHelper {

    public static async listItems(target){
        try {
            return target == 'task'? 
                await Task.find() : 
                await User.find()            
        } catch (error) {
            return error
        }
    }

    public static async addItem(target, data){
        try {
            if(target === 'task')
                return await Task.create(data)
            else if(target === 'user'){
                let password = bcrypt.hashSync(data.password, salt);
                return await User.create({
                    name : data.name,
                    password
                })
            }
        } catch (error) {
            return error
        }
    }

    public static async updateItem(target, data){
        try {
            return target === 'task'? 
                await Task.update({_id:data.id}, data) : 
                await User.update({_id:data.id}, data)
        } catch (error) {
            return error
        }
    }

    public static async deleteItem(target, id){
        try {
            return target === 'task'? 
                await Task.deleteOne({_id:id}) : 
                await User.deleteOne({_id:id})
        } catch (error) {
            return error
        }
    }
}