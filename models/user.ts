import { model, Schema } from 'mongoose';

let schema: Schema = new Schema({
  name: String,
  password: String
})

export const User = model('User', schema);

// export interface IUser extends Document {
//   name: string;
//   password: string;
//   somethingElse?: number; 
// };

// export const UserSchema = new Schema({
//   name: {type:String, required: true},
//   password: {type:String, required: true},
//   somethingElse: Number,
// });

// export const User = mongoose.model<IUser>('User', UserSchema);
