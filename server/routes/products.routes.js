const ProductController = require("../controllers/products.controllers");

module.exports = app => {
    app.get("/api/products/all", ProductController.findAllProducts);
    app.get("/api/products/:_id", ProductController.findSingleProduct);
    app.post("/api/products/create", ProductController.createProduct);
    app.put("/api/products/:_id/update", ProductController.updateSingleProduct);
    app.delete("/api/products/:_id/delete", ProductController.deleteSingleProduct)
}