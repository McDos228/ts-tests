import {Video} from '../../models/video';
// import {Config} from '../../config';
// import Emails from '../mail/';
// import * as jwt from 'jsonwebtoken';

export default class VideoService {
    public static async saveVideo(path, id){
        try {
            const savedVideo = await Video.create(path, id);
            if(!savedVideo) return {message : 'some error'}
            else return savedVideo
        } catch (error) {
            return error
        }
    }
}