import { Response, Request, query } from "express";

import pool from "./../database";

class AuthController {
 

   

  public async store(req: Request, res: Response) {
    await pool.then((r) => {
      var sql = ``;
      let result = r.query(sql, function (error: Error, rows: any) {
          console.log(sql)
        res.json({
            "success": true,
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoibW9odGFkaSIsImV4cGlyZXNJbiI6IjFoIiwiaWF0IjoxNjAyNjM4NTU4fQ.YQTVNWqClAXZsmfrtuOT5z02ldxo7P7oBXwjbOChpRo"
        });
      });
    });
  } 
   
}

export const authController = new AuthController();
export default authController;
