import * as express from 'express';
import {AuthHelper} from '../auth/';
import { task } from './tasks/';
import { auth } from './auth/';
import { admin } from './admin/';

class MainRoutes {
    public router: express.Router = express.Router();

    constructor() {
        this.config();
    }

    private config(): void {
        this.router.use('/auth', auth);
        this.router.use('/tasks', AuthHelper.isAuth, task);
        this.router.use('/dashboard', AuthHelper.isAdmin, admin);
    }
}

export const mainRoutes = new MainRoutes().router;