import { mongoose } from 'mongoose';
import { Document, Schema, Model } from 'mongoose';

export interface ITask extends Document {
  title: string;
  desc?: string; 
};

export const TaskSchema = new Schema({
  title: {type:String, required: true},
  somethingElse: String,
});

export const Task = mongoose.model<ITask>('Task', TaskSchema);
