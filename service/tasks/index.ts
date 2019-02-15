import {Task} from '../../models/task';

interface updatedField{
    title? : String;
    desc? : String;
    done? : String;
}

export default class Tasks {

    public static async viewTaskList(userId){
        try {
            const taskList = await Task.find({userId});
            if(!taskList) return {message : 'some error'};
            return taskList
        } catch (error) {
            return error
        }
    }

    public static async viewOneTask(userId, id){
        try {
            const taskList = await Task.find({userId, _id: id});
            if(!taskList) return {message : 'some error'};
            return taskList
        } catch (error) {
            return error
        }
    }

    public static async createTask(data){
        try {
            console.log(data)
            const newTask = await Task.create(data);
            if(!newTask) return {message:'error with creating your task'};
            return newTask
        } catch (error) {
            return error
        }
    }

    public static async updateTask({id, title, desc, done}){
        try {
            let updates : updatedField = {
                title, 
                desc,
                done
            }
            const updatedTask = await Task.updateOne({_id:id}, updates);
            if(!updatedTask) return {message: 'some error'};
            return updatedTask
        } catch (error) {
            return error
        }
    }

    public static async deleteTask(id){
        try {
            const deletedTask = await Task.deleteOne({_id:id});
            if(!deletedTask) return {message: 'some error'};
            return deletedTask
        } catch (error) {
            return error
        }
    }
}