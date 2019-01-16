import {Task} from '../../models/task';

export class Tasks {

    public static async viewTaskList(userId){
        try {
            const taskList = await Task.find({userId});
            if(!taskList) return {message : 'some error'};
            return taskList
        } catch (error) {
            return error
        }
    }

    public static async createTask(data){
        try {
            const newTask = await Task.create(data);
            if(!newTask) return {message:'error with creating your task'};
            return newTask
        } catch (error) {
            return error
        }
    }

    public static async updateTask({_id, title, desc}){
        try {
            const updatedTask = await Task.update(_id, {title, desc});
            if(updatedTask) return {message: 'some error'};
            return updatedTask
        } catch (error) {
            return error
        }
    }

    public static async deleteTask(id){
        try {
            const deletedTask = await Task.deleteOne({_id:id});
            if(deletedTask) return {message: 'some error'};
            return deletedTask
        } catch (error) {
            return error
        }
    }
}