import * as express from 'express';
import {AuthHelper} from '../auth/';
import { task } from './tasks/';
import { auth } from './auth/';
import { admin } from './admin/';
import { video } from './video';

class MainRoutes {
    public router: express.Router = express.Router();

    constructor() {
        this.config();
    }

    private config(): void {
        this.router.use('/auth', auth);
        this.router.use('/tasks', task);
        this.router.use('/dashboard', AuthHelper.isAuth, AuthHelper.isAdmin, admin);
        // this.router.use('/profile', AuthHelper.isAuth, profile);
        this.router.use('/video', video);
    }
}

export const mainRoutes = new MainRoutes().router;