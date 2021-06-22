// Redirige les requêtes vers les bons controllers
//   '/products' => productController.findAllProducts()

const {findAllProducts, findOneProductById} = require('./products.controllers')
const productsRouter = require('express').Router();

productsRouter.get('/', findAllProducts)

productsRouter.get('/:productId', findOneProductById)

module.exports = productsRouter;