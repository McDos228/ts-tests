import {Request, Response, Router, NextFunction} from 'express';

class Task {

    public router: Router = Router();

    constructor() {
        this.init();
    }

    public createTask (req: Request, res: Response, next:NextFunction){
        console.log('Create Task')
    }

    public listTask (req: Request, res: Response, next:NextFunction){
        console.log('List Task')
    }

    public init(){
        this.router
            .post('/', this.createTask)
            .get('/', this.listTask)
    }

}

export const task = new Task().router;
