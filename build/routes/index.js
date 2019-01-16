"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const auth_1 = require("../auth/");
const tasks_1 = require("./tasks/");
const auth_2 = require("./auth/");
class MainRoutes {
    constructor() {
        this.router = express.Router();
        this.config();
    }
    config() {
        this.router.use('/auth', auth_2.auth);
        this.router.use('/tasks', auth_1.AuthHelper.isAuth, tasks_1.task);
    }
}
exports.mainRoutes = new MainRoutes().router;
