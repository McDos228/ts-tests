"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Config {
}
Config.mongoConn = 'mongodb://localhost:27017/tsdb';
Config.port = process.env.PORT || 3000;
Config.secret = 'secret';
exports.Config = Config;
exports.default = Config;
