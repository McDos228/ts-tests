"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const config_1 = require("./config");
app_1.default.listen(config_1.port, () => {
    console.log('listening on port ' + config_1.port);
});
