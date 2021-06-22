const {findAll, findOne} = require('./products.model');

const findAllProducts = async (req, res) => {
    try {
        const products = await findAll();
        res.send(products);
    } catch (err) {
        res.status(400).send(err)
    }
}

const findOneProductById = async (req, res) => {
    try {
        const {productId} = req.params;
        const product = await findOne(productId);
        res.send(product);
    } catch (err) {
        res.status(400).send(err)
    }
}


module.exports = {
    findAllProducts,
    findOneProductById
}