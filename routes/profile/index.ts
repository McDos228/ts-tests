import {Request, Response, Router, NextFunction} from 'express';
import ProfileService from '../../service/profile';

class ProfileRoutes {

    public router: Router = Router();

    constructor() {
        this.init();
    }

    public async getProfile(req: Request, res: Response, next: NextFunction){}

    public async resetPass(req: Request, res: Response, next: NextFunction) {
        try {
            const resetPassword = await ProfileService.forgotPassword(req.user);
            if(resetPassword)
                res.json({response : resetPassword.response})
        } catch (error) {
            res.json(error)
        }
    }

    init(){
        this.router
            .get('/', this.getProfile)
            .get('/resetpass', this.resetPass)
    }

}

export const profile = new ProfileRoutes().router;