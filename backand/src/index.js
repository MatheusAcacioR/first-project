const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/*
* Rota / Recurso
*/

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/Listar uma informação do Back-and
 * POST: Criar uma informação no Back-and
 * PUT: Alterar uma innformação no Back-and
 * DELETE: Deletar uma informação do Back-and
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parametros nomeados enviados na rota após '?' (Filtros, paginação)
  * Route Params: Parametros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */



app.listen(3333);