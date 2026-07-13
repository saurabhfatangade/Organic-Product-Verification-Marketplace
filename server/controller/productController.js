const fs = require("fs");
const path = require("path");

const productsFile = path.join(__dirname, "../data/products.json");

// Get all products
const getProducts = (req, res) => {
    try {
        const products = JSON.parse(fs.readFileSync(productsFile));

        res.status(200).json({
            success: true,
            products
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


const addProduct = (req, res) => {
    try {
        const { name, description, price, farmer } = req.body;

        const products = JSON.parse(fs.readFileSync(productsFile));

        const newProduct = {
            id: Date.now(),
            name,
            description,
            price,
            farmer,
            createdAt: new Date().toISOString()
        };

        products.push(newProduct);

        fs.writeFileSync(productsFile, JSON.stringify(products, null, 2));

        res.status(201).json({
            success: true,
            message: "Product Added Successfully",
            product: newProduct
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getProductById = (req, res) => {
    try {
        const { id } = req.params;

        const products = JSON.parse(fs.readFileSync(productsFile));

        const product = products.find(
            (p) => p.id == id
        );

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        res.status(200).json({
            success: true,
            product
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const updateProduct = (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        const products = JSON.parse(fs.readFileSync(productsFile));

        const index = products.findIndex(p => p.id == id);

        if (index === -1) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        products[index] = {
            ...products[index],
            ...updatedData
        };

        fs.writeFileSync(productsFile, JSON.stringify(products, null, 2));

        res.json({
            success: true,
            message: "Product updated successfully",
            product: products[index]
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const deleteProduct = (req, res) => {
    try {
        const { id } = req.params;

        let products = JSON.parse(fs.readFileSync(productsFile));

        const productExists = products.find(p => p.id == id);

        if (!productExists) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        products = products.filter(p => p.id != id);

        fs.writeFileSync(productsFile, JSON.stringify(products, null, 2));

        res.status(200).json({
            success: true,
            message: "Product deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
const searchProducts = (req, res) => {
    try {
        const { keyword } = req.query;

        const products = JSON.parse(fs.readFileSync(productsFile));

        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(keyword.toLowerCase())
        );

        res.status(200).json({
            success: true,
            products: filteredProducts
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
module.exports = {
    getProducts,
    addProduct,
    getProductById,
     updateProduct,
     deleteProduct,
     searchProducts
};