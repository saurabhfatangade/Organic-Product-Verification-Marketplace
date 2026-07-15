const express = require("express");

const router = express.Router();

const products = [
    {
        id: 1,
        name: "Organic Rice",
        description: "100% certified organic rice",
        category: "Grains",
        price: 500
    },
    {
        id: 2,
        name: "Organic Honey",
        description: "Pure natural organic honey",
        category: "Natural Products",
        price: 350
    }
];

router.get("/", (req, res) => {
    res.json({
        success: true,
        products: products
    });
});

router.get("/:id", (req, res) => {
    const product = products.find(
        product => product.id === Number(req.params.id)
    );

    if (!product) {
        return res.status(404).json({
            success: false,
            message: "Product not found"
        });
    }

    res.json({
        success: true,
        product: product
    });
});

module.exports = router;