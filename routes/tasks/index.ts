import {Request, Response, Router, NextFunction} from 'express';

class Task {

    public router: Router = Router();

    constructor() {
        this.init();
    }

    public async createTask (req: Request, res: Response, next:NextFunction){
        try {
            res.json({message:'Create Task'})
        } catch (error) {
            res.json(error)
        }
        
    }

    public async listTask (req: Request, res: Response, next:NextFunction){
        try {
            res.json({message:'List Tasks'})    
        } catch (error) {
            res.json(error)
        }
    }

    public init(){
        this.router
            .post('/', this.createTask)
            .get('/', this.listTask)
    }

}

export const task = new Task().router;
