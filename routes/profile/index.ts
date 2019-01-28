// import {Request, Response, Router, NextFunction} from 'express';
// import ProfileService from '../../service/profile';

// class ProfileRoutes {

//     public router: Router = Router();

//     constructor() {
//         this.init();
//     }

//     public async getProfile(req: Request, res: Response, next: NextFunction){}

//     public async forgotPass(req: Request, res: Response, next: NextFunction) {
//         try {
//             const resetPassword = await ProfileService.forgotPassword(req.user);
//             if(resetPassword)
//                 res.json({response : resetPassword.response})
//         } catch (error) {
//             res.json(error)
//         }
//     }

//     public async resetPass(req: Request, res: Response, next: NextFunction) {
//         try {
            
//         } catch (error) {
//             res.json(error)
//         }
//     }

//     init(){
//         this.router
//             .get('/', this.getProfile)
//             .get('/forgotpass', this.forgotPass)
//             .get('/resetpass/:token', this.resetPass)
//     }

// }

// export const profile = new ProfileRoutes().router;