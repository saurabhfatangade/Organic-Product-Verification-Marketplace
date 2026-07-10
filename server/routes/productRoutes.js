const verifyToken = require("../middleware/authMiddleware");
const express = require("express");
const router = express.Router();

const {
    getProducts,
    addProduct
} = require("../controller/productController");

router.get("/", getProducts);

router.post("/", verifyToken, addProduct);

module.exports = router;