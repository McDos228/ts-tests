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
            const savedVideo = await VideoService.saveVideo(path.join(`${__dirname}/uploads/${req.file.filename}`), req.user.user._id);
            if(!savedVideo) res.json({msg : 'some error'})
            else res.json(savedVideo)
        } catch (error) {
            res.json(error)
        }
    }

    public async deleteVideo(req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (error) {
            res.json(error)
        }
    }

    init(){
        this.router
            .post('/', upload.single('video'), this.uploadVideo)
            .delete('/:id', this.deleteVideo)
    }
}

export const video = new VideoRouter().router;