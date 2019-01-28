import {Request, Response, Router, NextFunction} from 'express';
import * as multer from 'multer';
import VideoService from '../../service/video';
import * as path from 'path';
const upload = multer({ dest: 'uploads' });

class VideoRouter {
    public router: Router = Router();

    constructor() {
        this.init();
    }

    public async uploadVideo(req: Request, res: Response, next: NextFunction) {
        try {
            const savedVideo = await VideoService.saveVideo(path.join(`${__dirname}/uploads/${req.file.filename}`), req.user.user._id)
            // const newUser = await Auth.signUp(req.body);
            // res.json(newUser)    
        } catch (error) {
            res.json(error)
        }
        
    }

    init(){
        this.router
            .post('/', upload.single('video'), this.uploadVideo)
            // .post('/signin', this.signIn)
            // .post('/forgotpass', this.forgotPass)
            // .post('/resetpass/:token', this.resetPass)
    }
}

export const video = new VideoRouter().router;