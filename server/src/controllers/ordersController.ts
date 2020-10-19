 import { Response, Request, query } from "express";
import pool from "./../database";

class OrdersController {
  public async index(req: Request, res: Response) {
    await pool.then((r) => {
      let result = r.query("select * from orders", function (
        error: Error,
        rows: any
      ) {
         res.send(rows);
      });
    });
  }

  public async getOrderById(req: Request, res: Response) {
    await pool.then((r) => {
      let result = r.query(
        "select * from cart_lines where order_id = " + req.params.id,
        function (error: Error, rows: any) {
          console.log(rows)
          res.send(rows);
        }
      );
    });
  }

  public async store(req: Request, res: Response) {
    await pool.then((r) => {
      console.log(req.body)
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
      
      let result = r.query(sql, function (error: Error, rows: any) {
          console.log(sql);
          console.log('Las inserted Id: ',rows['insertId']);
          req.body.cart.lines.forEach((element: any) => {
            var sqlInsertLinesCart = `INSERT INTO cart_lines  SET
            order_id = ${rows['insertId']}, 
            product_id = ${element.product.id}, 
            name = '${element.product.name}', 
            category = '${element.product.category}', 
            description = "${element.product.description}" , 
            price = ${element.product.price} ,
            quantity = ${element.quantity}`;

            console.log(element);

            let resultLines = r.query(sqlInsertLinesCart, function (error: Error, rows: any) {
              console.log(sqlInsertLinesCart);
              console.log('cartLine has been created')
            })
          });
          res.json({ message: "order has been created" });
      });

     });
  }

  public async update(req: Request, res: Response) {
    await pool.then((r) => {
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
     
      let result = r.query(sqlUpdate, function (error: Error, rows: any) {
         res.json({ message: "juego actualizado" });
      });
    });
  }

  public async delete(req: Request, res: Response) {
    await pool.then((r) => {
      var sqlDelete = `DELETE FROM orders WHERE id = '${req.params.id}'`;
      console.log(sqlDelete);
      let result = r.query(sqlDelete, function (error: Error, rows: any) {
        res.json({ message: "products borrado" });
      });
    });
  }
}

export const ordersController = new OrdersController();
export default ordersController;
