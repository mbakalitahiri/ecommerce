"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const database_1 = __importDefault(require("./../database"));
class AuthController {
    store(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.then((r) => {
                var sql = ``;
                let result = r.query(sql, function (error, rows) {
                    console.log(sql);
                    res.json({
                        "success": true,
                        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoibW9odGFkaSIsImV4cGlyZXNJbiI6IjFoIiwiaWF0IjoxNjAyNjM4NTU4fQ.YQTVNWqClAXZsmfrtuOT5z02ldxo7P7oBXwjbOChpRo"
                    });
                });
            });
        });
    }
}
exports.authController = new AuthController();
exports.default = exports.authController;
