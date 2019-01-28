import { model, Schema } from 'mongoose';

let schema: Schema = new Schema({
    path : {type: String, required: true},
    userId : {type: Schema.Types.ObjectId, ref: 'User'}
})

export const Video = model('Video', schema);