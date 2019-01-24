import { model, Schema } from 'mongoose';

let schema: Schema = new Schema({
  name: {type:String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type:String, required: true},
  role: {type:String, required: true},
  resetToken: {type: String, unique: true}
})

export const User = model('User', schema);