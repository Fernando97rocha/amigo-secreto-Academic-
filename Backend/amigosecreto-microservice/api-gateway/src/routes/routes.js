const { Router } = require('express');
const httpProxy = require('express-http-proxy');
const routes = Router();
const {
    PARTICIPANTE_API_URL,
    GRUPO_API_URL,
    SORTEIO_API_URL,
    LISTADESEJO_API_URL,
    CONVITE_API_URL,
  } = require('./url');
  
  const participanteServiceProxy = httpProxy(PARTICIPANTE_API_URL);
  const grupoServiceProxy = httpProxy(GRUPO_API_URL);

  routes.get('/', (req, res) => res.send('Ola API Gateway'));
  
  routes.get('/participante/:id', (req, res) => participanteServiceProxy(req, res));
  routes.get('/grupo/:id', (req, res) => grupoServiceProxy(req, res));

  module.exports = routes;  