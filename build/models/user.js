"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let schema = new mongoose_1.Schema({
    name: String,
    password: String
});
exports.User = mongoose_1.model('User', schema);
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
