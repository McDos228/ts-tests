"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let schema = new mongoose_1.Schema({
    title: String,
    desc: String,
    done: Boolean,
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' }
});
exports.Task = mongoose_1.model('Task', schema);
