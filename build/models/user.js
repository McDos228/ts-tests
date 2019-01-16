"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let schema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
exports.User = mongoose_1.model('User', schema);
