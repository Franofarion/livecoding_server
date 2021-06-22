const productsRouter = require('./products/products.routes');

module.exports = (app) => {
    app.use('/products', productsRouter);
}