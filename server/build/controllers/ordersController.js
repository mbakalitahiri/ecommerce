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
exports.ordersController = void 0;
const database_1 = __importDefault(require("./../database"));
class OrdersController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.then((r) => {
                let result = r.query("select * from orders", function (error, rows) {
                    res.send(rows);
                });
            });
        });
    }
    getOrderById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.then((r) => {
                let result = r.query("select * from cart_lines where order_id = " + req.params.id, function (error, rows) {
                    console.log(rows);
                    res.send(rows);
                });
            });
        });
    }
    store(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.then((r) => {
                console.log(req.body);
                var sql = `INSERT INTO orders  SET 
      name = '${req.body.name}', 
      address = '${req.body.address}', 
      city = '${req.body.city}', 
      state = '${req.body.state}', 
      zip = '${req.body.zip}' , 
      country = '${req.body.country}' , 
      itemCount = ${req.body.cart.itemCount} ,
      cartPrice = ${req.body.cart.cartPrice} ,
      date = '${req.body.d}' ,
      shipped = ${req.body.shipped}`;
                let result = r.query(sql, function (error, rows) {
                    console.log(sql);
                    console.log('Las inserted Id: ', rows['insertId']);
                    req.body.cart.lines.forEach((element) => {
                        var sqlInsertLinesCart = `INSERT INTO cart_lines  SET
            order_id = ${rows['insertId']}, 
            product_id = ${element.product.id}, 
            name = '${element.product.name}', 
            category = '${element.product.category}', 
            description = "${element.product.description}" , 
            price = ${element.product.price} ,
            quantity = ${element.quantity}`;
                        console.log(element);
                        let resultLines = r.query(sqlInsertLinesCart, function (error, rows) {
                            console.log(sqlInsertLinesCart);
                            console.log('cartLine has been created');
                        });
                    });
                    res.json({ message: "order has been created" });
                });
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.then((r) => {
                var sqlUpdate = `UPDATE  orders  SET  
      name =     '${req.body.name}', 
      address =  '${req.body.address}', 
      city =     '${req.body.city}', 
      state =    '${req.body.state}', 
      zip =      '${req.body.zip}', 
      country =  '${req.body.country}' , 
      itemCount = ${req.body.itemCount} ,
      cartPrice = ${req.body.cartPrice} ,
      shipped =   ${req.body.shipped}
      WHERE id =  ${req.body.id}`;
                let result = r.query(sqlUpdate, function (error, rows) {
                    res.json({ message: "juego actualizado" });
                });
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.then((r) => {
                var sqlDelete = `DELETE FROM orders WHERE id = '${req.params.id}'`;
                console.log(sqlDelete);
                let result = r.query(sqlDelete, function (error, rows) {
                    res.json({ message: "products borrado" });
                });
            });
        });
    }
}
exports.ordersController = new OrdersController();
exports.default = exports.ordersController;
