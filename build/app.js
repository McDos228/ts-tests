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
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield mongoose_1.connect(config_1.Config.mongoConn);
                if (conn)
                    console.log('connected');
            }
            catch (error) {
                console.log(error);
            }
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
