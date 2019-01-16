"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tasks_1 = require("../../service/tasks");
class TaskRouter {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    createTask(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newTask = yield tasks_1.Tasks.createTask(req.body);
                if (!newTask)
                    res.json({ message: 'some error' });
                res.json(newTask);
            }
            catch (error) {
                res.json(error);
            }
        });
    }
    listTask(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = req.query.userId;
                const viewTask = yield tasks_1.Tasks.viewTaskList(userId);
                if (!viewTask)
                    res.json({ message: 'some error' });
                res.json(viewTask);
            }
            catch (error) {
                res.json(error);
            }
        });
    }
    updateTask(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.json({ message: 'Update Task' });
            }
            catch (error) {
                return error;
            }
        });
    }
    deleteTask(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deletedTask = yield tasks_1.Tasks.deleteTask(req.body.id);
                if (!deletedTask)
                    return { message: 'some error' };
                else
                    res.json(deletedTask);
            }
            catch (error) {
                res.json(error);
            }
        });
    }
    init() {
        this.router
            .post('/', this.createTask)
            .get('/', this.listTask)
            .put('/', this.updateTask)
            .delete('/', this.deleteTask);
    }
}
exports.task = new TaskRouter().router;
