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
exports.searchController = void 0;
const database_1 = __importDefault(require("./../database"));
class SearchController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.then((r) => {
                //const reqKeys = Object.keys(req.query);        
                const keyField = (req.query.keyField);
                const keyFieldValue = (req.query.term);
                console.log(keyField, keyFieldValue);
                let results = r.query(`select * from orders where ${keyField} LIKE '%${keyFieldValue}%'`, function (error, rows) {
                    const resultado = { results: rows, total: rows.length };
                    res.send(resultado);
                });
            });
        });
    }
}
exports.searchController = new SearchController();
exports.default = exports.searchController;
