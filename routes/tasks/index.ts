import {Request, Response, Router, NextFunction} from 'express';
import {Tasks} from '../../service/tasks';

class TaskRouter {

    public router: Router = Router();

    constructor() {
        this.init();
    }

    public async createTask (req: Request, res: Response, next:NextFunction){
        try {
            const newTask = await Tasks.createTask(req.body);
            if(!newTask) res.json({message:'some error'})
            res.json(newTask)
        } catch (error) {
            res.json(error)
        }
    }

    public async listTask (req: Request, res: Response, next:NextFunction){
        try {
            const userId = req.query.userId;
            const viewTask = await Tasks.viewTaskList(userId);
            if(!viewTask) res.json({message:'some error'})
            res.json(viewTask)
        } catch (error) {
            res.json(error)
        }
    }

    public async updateTask (req: Request, res: Response, next:NextFunction){
        try {
            res.json({message:'Update Task'})
        } catch (error) {
            return error
        }
    }

    public async deleteTask (req: Request, res: Response, next:NextFunction){
        try {
            const deletedTask = await Tasks.deleteTask(req.body.id);
            if(!deletedTask) 
                return {message:'some error'}
            else 
                res.json(deletedTask)
        } catch (error) {
            res.json(error)
        }
    }

    public init(){
        this.router
            .post('/', this.createTask)
            .get('/', this.listTask)
            .put('/', this.updateTask)
            .delete('/', this.deleteTask)
    }

}

export const task = new TaskRouter().router;
