import { model, Schema } from 'mongoose';

let schema: Schema = new Schema({
  role: String
})

export const Role =  model('Role', schema);