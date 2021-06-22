const db = require('../../dbConfig');

const findAll = async () => {
    try {
        const result = await db.query('SELECT * from products');
        return result;
    } catch (err) {
        throw new Error(err);
    }
}

const findOne = async (productId) => {
    try {
        const result = await db.query('SELECT * from products WHERE id = ?', [productId]);
        return result[0][0];
    } catch (err) {
        throw new Error(err);
    }
}

module.exports = {
    findAll
}