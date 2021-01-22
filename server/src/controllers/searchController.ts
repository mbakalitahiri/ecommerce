 import { Response, Request, query } from "express";
import pool from "./../database";
import querystring from 'querystring';

 

class SearchController {
  public async index(req: Request, res: Response) {
    await pool.then((r) => { 

        //const reqKeys = Object.keys(req.query);        
        const keyField = (req.query.keyField);
        const keyFieldValue = (req.query.term);
        console.log(keyField, keyFieldValue)

      let results = r.query(`select * from orders where ${keyField} LIKE '%${keyFieldValue}%'`, function (
        error: Error,
        rows: any
      ) {   
      
        const resultado = { results: rows, total : rows.length};
       
        return resultado
         
         res.send(resultado);
      });
    });
  }

 

   

   

   
}

export const searchController = new SearchController();
export default searchController;
