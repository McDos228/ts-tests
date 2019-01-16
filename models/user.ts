import { model, Schema } from 'mongoose';

let schema: Schema = new Schema({
  name: {type:String, required: true, unique: true},
  password: {type:String, required: true}
})

export const User = model('User', schema);