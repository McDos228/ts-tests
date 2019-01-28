import {Request, Response, Router, NextFunction} from 'express';
import Auth from '../../service/auth/';

class AuthRouter {

    public router: Router = Router();

    constructor() {
        this.init();
    }

    public async signUp(req: Request, res: Response, next: NextFunction) {
        try {
            const newUser = await Auth.signUp(req.body);
            res.json(newUser)    
        } catch (error) {
            res.json(error)
        }
        
    }

    public async signIn(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await Auth.signIn(req.body);    
            res.json(user)
        } catch (error) {
            res.json(error)   
        }
    }

    public async forgotPass(req: Request, res: Response, next: NextFunction) {
        try {
            const forgotPassword = await Auth.forgotPassword(req.body.email);
            if(!forgotPassword) res.json({message: 'some error'})
            else res.json(forgotPassword)
        } catch (error) {
            res.json(error)
        }
    }

    public async resetPass(req: Request, res: Response, next: NextFunction) {
        try {
            const newPass = await Auth.resetPassowrd(req.params.token, req.body.password);
            if(!newPass) res.json({message: 'some error'})
            else res.json(newPass)
        } catch (error) {
            res.json(error)
        }
    }

    init(){
        this.router
            .post('/signup', this.signUp)
            .post('/signin', this.signIn)
            .post('/forgotpass', this.forgotPass)
            .post('/resetpass/:token', this.resetPass)
    }

}

export const auth = new AuthRouter().router;
