"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
;
exports.UserSchema = new mongoose_2.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    somethingElse: Number,
});
exports.User = mongoose_1.mongoose.model('User', exports.UserSchema);
