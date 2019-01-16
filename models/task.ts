import { model, Schema } from 'mongoose';

let schema: Schema = new Schema({
  title: String,
  desc: String,
  done: Boolean,
  userId : {type: Schema.Types.ObjectId, ref: 'User'}
})

export const Task =  model('Task', schema);