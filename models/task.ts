import { model, Schema } from 'mongoose';

let schema: Schema = new Schema({
  title: String,
  desc: String,
})

export const Task =  model('Task', schema);