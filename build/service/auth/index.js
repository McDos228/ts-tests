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
const user_1 = require("../../models/user");
const bcrypt = require("bcryptjs");
const config_1 = require("../../config");
const jwt = require("jsonwebtoken");
const salt = bcrypt.genSaltSync(10);
class Auth {
    static signUp(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let password = bcrypt.hashSync(data.password, salt);
                return yield user_1.User.create({
                    name: data.name,
                    password
                });
            }
            catch (error) {
                return error;
            }
        });
    }
    static signIn({ name, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield user_1.User.findOne({ name });
                if (!user)
                    return { message: 'no user found' };
                if (bcrypt.compareSync(password, user.password))
                    return {
                        name: user.name,
                        token: jwt.sign({ user }, config_1.Config.secret)
                    };
                else
                    return { message: 'password not equal' };
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.default = Auth;
