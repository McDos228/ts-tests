"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let schema = new mongoose_1.Schema({
    title: String,
    desc: String,
});
exports.Task = mongoose_1.model('Task', schema);
