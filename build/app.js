"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const index_1 = require("./routes/index");
const mongoose_1 = require("mongoose");
const config_1 = require("./config");
class App {
    constructor() {
        this.app = express();
        this.config();
    }
    connectToMongo() {
        mongoose_1.connect(config_1.Config.mongoConn, {
            db: { safe: true }
        }).then(() => {
            console.log('connected');
        }).catch(err => {
            console.log(err);
        });
    }
    config() {
        this.connectToMongo();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use('/', index_1.mainRoutes);
    }
}
exports.default = new App().app;
