const { response } = require('express');
const { Product } = require('../models/product.model');

// //Home
// module.exports.index = (request, response) => {
//     response.json({
//         message: "Hello World"
//     });
// }

//Create
module.exports.createProduct = (req, res) => {
    const { title, price, description } = req.body;
    Product.create({ title, price, description })
        .then((product) => console.log("Product created succesfully ", product))
        .catch((error) => console.log("Something went wrong (CreateProduct)", error));
}

//Get All
module.exports.getAllProducts = (req, res) => {
    Product.find({})
        .then(products => res.json(products))
        .catch((error) => console.log("Something went wrong (getAllProducts)", error));
}

//Get one product
module.exports.getOneProduct = (req, res) => {
    Product.findById(req.params.id)
        .then(product => res.json(product))
        .catch((error) => console.log("Something went wrong (getAllProducts)", error));
}

//Update product
module.exports.updateProduct = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(updatedProduct => res.json(updatedProduct))
        .catch((error) => console.log("Something went wrong (updateProduct)", error));
}

//Delete product
module.exports.deleteProduct = (req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch((error) => console.log("Something went wrong (deleteProduct)", error));
}