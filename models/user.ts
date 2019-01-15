import { mongoose } from 'mongoose';
import { Document, Model, Schema } from 'mongoose';

export interface IUser extends Document {
  name: string;
  password: string;
  somethingElse?: number; 
};

export const UserSchema = new Schema({
  name: {type:String, required: true},
  password: {type:String, required: true},
  somethingElse: Number,
});

export const User = mongoose.model<IUser>('User', UserSchema);
