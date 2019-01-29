import {Video} from '../../models/video';
import * as fs from 'fs';

export default class VideoService {
    public static async saveVideo(path, id){
        try {
            const savedVideo = await Video.create({path, id});
            if(!savedVideo) return {message : 'some error'}
            else return savedVideo
        } catch (error) {
            return error
        }
    }

    public static async deleteVideo({id, name}){
        try {
            const deletedVideo = await Video.deleteOne({_id: id});
            if(!deletedVideo) return {message: 'some error'}
            else {
                await fs.unlinkSync(name);
                return deletedVideo
            }
                
        } catch (error) {
            return error
        }
    }

    public static async getVideo(id){
        try {
            const video = await Video.findOne({_id : id});
            if(!video) return {message: 'some error'}
            else return video
        } catch (error) {
            return error
        }
    }

    public static async listVideo(){
        try {
            const list = await Video.find();
            if(!list) return {message: 'some error'}
            else return list
        } catch (error) {
            return error
        }
    }
}