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
const auth_1 = require("../../service/auth/");
class AuthRouter {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    signUp(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = yield auth_1.default.signUp(req.body);
            // if(newUser) res.json(newUser)
            // else 
            // res.json({message:'Some errors'})
            res.json(newUser);
        });
    }
    signIn(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield auth_1.default.signIn(req.body.name);
            // if(user) res.json(user)
            // else 
            res.json({ message: 'Some errors' });
        });
    }
    init() {
        this.router
            .post('/signup', this.signUp)
            .post('/signin', this.signIn);
    }
}
exports.auth = new AuthRouter().router;