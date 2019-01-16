import * as express from 'express';
import {AuthHelper} from '../auth/';
import { task } from './tasks/';
import { auth } from './auth/';

class MainRoutes {
    public router: express.Router = express.Router();

    constructor() {
        this.config();
    }

    private config(): void {
        this.router.use('/auth', auth);
        this.router.use('/tasks', AuthHelper.isAuth, task);
    }
}

export const mainRoutes = new MainRoutes().router;