import * as express from 'express';
import { task } from './tasks/';
import {auth} from './auth/';

class MainRoutes {
    public router: express.Router = express.Router();

    constructor() {
        this.config();
    }

    private config(): void {
        this.router.use('/test', task);
        this.router.use('/auth', auth);
    }
}

export const mainRoutes = new MainRoutes().router;