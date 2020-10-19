 import { Response, Request, query } from "express";
import pool from "./../database";

class ProductsController {
  public async index(req: Request, res: Response) {
    await pool.then((r) => {
      let result = r.query("select * from products", function (
        error: Error,
        rows: any
      ) {
         res.send(rows);
      });
    });
  }

  public async getProductById(req: Request, res: Response) {
    await pool.then((r) => {
      let result = r.query(
        "select * from products where id = " + req.params.id,
        function (error: Error, rows: any) {
          res.send(rows);
        }
      );
    });
  }

  public async store(req: Request, res: Response) {
    await pool.then((r) => {
      var sql = `INSERT INTO products  SET title = '${req.body.title}', description = '${req.body.description}', image = '${req.body.image}'`;
      let result = r.query(sql, function (error: Error, rows: any) {
        res.json({ message: "juego creado" });
      });
    });
  }

  public async update(req: Request, res: Response) {
    await pool.then((r) => {
      var sqlUpdate = `UPDATE  products  SET name = '${req.body.name}', category = '${req.body.category}', description = '${req.body.description}', price = ${req.body.price} WHERE id = '${req.params.id}'`;
      console.log(sqlUpdate);

      let result = r.query(sqlUpdate, function (error: Error, rows: any) {
        res.json({ message: "juego actualizado" });
      });
    });
  }

  public async delete(req: Request, res: Response) {
    await pool.then((r) => {
      var sqlDelete = `DELETE FROM products WHERE id = '${req.params.id}'`;
      console.log(sqlDelete);
      let result = r.query(sqlDelete, function (error: Error, rows: any) {
        res.json({ message: "products borrado" });
      });
    });
  }
}

export const productsController = new ProductsController();
export default productsController;
