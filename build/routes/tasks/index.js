"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class Task {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    createTask(req, res, next) {
        console.log('Create Task');
    }
    listTask(req, res, next) {
        console.log('List Task');
    }
    init() {
        this.router
            .post('/', this.createTask)
            .get('/', this.listTask);
    }
}
exports.task = new Task().router;
