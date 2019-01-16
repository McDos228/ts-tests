import {Request, Response, Router, NextFunction} from 'express';
import AdminHelper from '../../service/admin/';

class AdminRouter {

    public router: Router = Router();

    constructor() {
        this.init();
    }

    public async userList(req: Request, res: Response, next: NextFunction) {
        try {
            const userList = await AdminHelper.listItems('user');
            if(!userList) return {message: 'error'}
            res.json({userList})
        } catch (error) {
            res.json(error)
        }
        
    }

    public async taskList(req: Request, res: Response, next: NextFunction) {
        try {
            const taskList = await AdminHelper.listItems('task');
            if(!taskList) return {message: 'error'}
            res.json({taskList})
        } catch (error) {
            res.json(error)   
        }
    }

    public async addUser(req: Request, res: Response, next: NextFunction) {
        try {
            const newUser = await AdminHelper.addItem('task', req.body);
            if(!newUser) return {message: 'error'}
            res.json({newUser})
        } catch (error) {
            res.json(error)   
        }
    }

    public async addTask(req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (error) {
            res.json(error)   
        }
    }

    public async updateTask(req: Request, res: Response, next: NextFunction) {
        try {
           
        } catch (error) {
            res.json(error)   
        }
    }

    public async updateUser(req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (error) {
            res.json(error)   
        }
    }

    public async deleteTask(req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (error) {
            res.json(error)   
        }
    }

    public async deleteUser(req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (error) {
            res.json(error)   
        }
    }

    init(){
        this.router
            .get('/user/list', this.userList)
            .get('/task/list', this.taskList)
            .post('/task/add', this.addTask)
            .post('/user/add', this.addUser)
            .put('/task/update', this.updateTask)
            .put('/user/update', this.updateUser)
            .delete('/user/delte', this.deleteUser)
            .delete('/task/delete', this.deleteTask)
    }

}

export const admin = new AdminRouter().router;
