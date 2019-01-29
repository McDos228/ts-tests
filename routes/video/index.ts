import {Request, Response, Router, NextFunction} from 'express';
import * as multer from 'multer';
import VideoService from '../../service/video';
import * as path from 'path';
const upload = multer({ dest: 'uploads',  
    filename: (req, file, cb)=> {
        console.log('dsadads')
        cb(null, file.originalname + '-' + Date.now() + '.' + file.extention )
    } 
});

class VideoRouter {
    public router: Router = Router();

    constructor() {
        this.init();
    }

    public async getVideo(req: Request, res: Response, next: NextFunction) {
        try {
            const video = await VideoService.getVideo(req.body.id);
            if(!video) res.json({msg : 'some error'})
            res.json(video)
        } catch (error) {
            res.json(error)
        }
    }

    public async uploadVideo(req: Request, res: Response, next: NextFunction) {
        try {
            // console.log('dsdsadasdad', req)
            const savedVideo = await VideoService.saveVideo(path.join(`${__dirname}/uploads/${req.file.originalname}`), '11');
            if(!savedVideo) res.json({msg : 'some error'})
            else res.json(savedVideo)
        } catch (error) {
            res.json(error)
        }
    }

    public async deleteVideo(req: Request, res: Response, next: NextFunction) {
        try {
            const deletedVideo = await VideoService.deleteVideo(req.body);
            if(!deletedVideo) res.json({msg : 'some error'})
            else res.json(deletedVideo)
        } catch (error) {
            res.json(error)
        }
    }

    public async listVideo(req: Request, res: Response, next: NextFunction) {
        try {
            const list = await VideoService.listVideo();
            if(!list) res.json({msg : 'some error'})
            else res.json(list)
        } catch (error) {
            res.json(error)
        }
    }

    init(){
        this.router
            .get('/', this.listVideo)
            .get('/:id', this.getVideo)
            .post('/', upload.single('video'), this.uploadVideo)
            .delete('/:id', this.deleteVideo)
    }
}

export const video = new VideoRouter().router;