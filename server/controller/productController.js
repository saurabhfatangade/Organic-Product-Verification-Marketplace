const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/products.json");

// GET All Products
const getProducts = (req, res) => {
    const products = JSON.parse(fs.readFileSync(filePath));

    res.json(products);
};

// POST Product
const addProduct = (req, res) => {

    const products = JSON.parse(fs.readFileSync(filePath));

    const newProduct = {
        id: Date.now(),
        ...req.body
    };

    products.push(newProduct);

    fs.writeFileSync(filePath, JSON.stringify(products, null, 2));

    res.status(201).json({
        success: true,
        message: "Product Added Successfully",
        product: newProduct
    });

};

module.exports = {
    getProducts,
    addProduct
};