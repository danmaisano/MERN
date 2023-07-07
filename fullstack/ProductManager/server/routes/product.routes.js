const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.get('/api/products', ProductController.getAll);
    app.post('/api/products', ProductController.create)
    app.patch('/api/products/:id', ProductController.update)
    app.delete('/api/products/:id', ProductController.delete)
}

