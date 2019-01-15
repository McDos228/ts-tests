"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
;
exports.TaskSchema = new mongoose_2.Schema({
    title: { type: String, required: true },
    somethingElse: String,
});
exports.Task = mongoose_1.mongoose.model('Task', exports.TaskSchema);
