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
exports.productsController = void 0;
const database_1 = __importDefault(require("./../database"));
class ProductsController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.then((r) => {
                let result = r.query("select * from products", function (error, rows) {
                    res.send(rows);
                });
            });
        });
    }
    getProductById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.then((r) => {
                let result = r.query("select * from products where id = " + req.params.id, function (error, rows) {
                    res.send(rows);
                });
            });
        });
    }
    store(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.then((r) => {
                var sql = `INSERT INTO products  SET title = '${req.body.title}', description = '${req.body.description}', image = '${req.body.image}'`;
                let result = r.query(sql, function (error, rows) {
                    res.json({ message: "juego creado" });
                });
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.then((r) => {
                var sqlUpdate = `UPDATE  products  SET name = '${req.body.name}', category = '${req.body.category}', description = '${req.body.description}', price = ${req.body.price} WHERE id = '${req.params.id}'`;
                console.log(sqlUpdate);
                let result = r.query(sqlUpdate, function (error, rows) {
                    res.json({ message: "juego actualizado" });
                });
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.then((r) => {
                var sqlDelete = `DELETE FROM products WHERE id = '${req.params.id}'`;
                console.log(sqlDelete);
                let result = r.query(sqlDelete, function (error, rows) {
                    res.json({ message: "products borrado" });
                });
            });
        });
    }
}
exports.productsController = new ProductsController();
exports.default = exports.productsController;
