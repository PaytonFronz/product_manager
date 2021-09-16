const Products = require("../models/products.models");

module.exports.findAllProducts = (req, res) => {
    Products.find({})
        .then(allProducts => res.json({ results: allProducts }))
        .catch(err => res.json({ message: "oops, error! Try again!", err }))
}

module.exports.findSingleProduct = (req, res) => {
    Products.findOne({ _id: req.params._id })
        .then(singleProduct => res.json({ results: singleProduct }))
        .catch(err => res.json({ message: "oops, error! Try again!", err }))
}

module.exports.createProduct = (req, res) => {
    Products.create(req.body)
        .then(createProduct => res.json({ results: createProduct }))
        .catch(err => res.json({ message: "oops, error! Try again!", err }))
}

module.exports.updateSingleProduct = (req, res) => {
    Products.findOneAndUpdate({ _id: req.params._id }, req.body, {new:true})
        .then(updatedProduct => res.json({ results: updatedProduct }))
        .catch(err => res.json({ message: "oops, error! Try again!", err }))
}

module.exports.deleteSingleProduct = (req, res) => {
    Products.deleteOne({ _id: req.params._id })
        .then(results => res.json({ results: results }))
        .catch(err => res.json({ message: "oops, error! Try again!", err }))
}