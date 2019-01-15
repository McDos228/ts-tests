"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const tasks_1 = require("./tasks/");
const auth_1 = require("./auth/");
class MainRoutes {
    constructor() {
        this.router = express.Router();
        this.config();
    }
    config() {
        this.router.use('/test', tasks_1.task);
        this.router.use('/auth', auth_1.auth);
    }
}
exports.mainRoutes = new MainRoutes().router;
