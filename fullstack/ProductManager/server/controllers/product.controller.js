const Product = require("../models/product.model");

module.exports.getAll = (req, res) => {
  Product.find()
    .then((allProducts) => {
      res.json(allProducts);
    })
    .catch((err) => {
      res.json({ message: "Something went wrong", error: err });
    });
};

module.exports.create = (req, res) => {
  Product.create(req.body)
    .then((newProduct) => {
      res.json(newProduct);
    })
    .catch((err) => {
      res.json({ message: "Something went wrong", error: err });
    });
};

module.exports.delete = (req, res) => {
  Product.findByIdAndDelete({ _id: req.params.id })
    .then((res) => {
      res.json(res);
    })
    .catch((err) => {
      res.json({ message: "Something went wrong", error: err });
    });
};

module.exports.update = (req, res) => {
  Product.findByIdAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedProduct) => {
      res.json(updatedProduct);
    })
    .catch((err) => {
      res.json({ message: "Something went wrong", error: err });
    });
};

module.exports.getOneProduct = (req, res) => {
  Product.findById({ _id: req.params.id })
    .then((product) => res.json(product))
    .catch((err) => {
      res.json({ message: "Something went wrong", error: err });
    });
};
