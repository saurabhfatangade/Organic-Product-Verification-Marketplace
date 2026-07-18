const express = require("express");

const router = express.Router();

const orders = [];

router.post("/", (req, res) => {
  const { customer, items, total } = req.body;

  if (
    !customer ||
    !items ||
    items.length === 0 ||
    !total
  ) {
    return res.status(400).json({
      success: false,
      message: "Invalid order data",
    });
  }

  const newOrder = {
    id: Date.now(),
    customer,
    items,
    total,
    status: "Pending",
    createdAt: new Date(),
  };

  orders.push(newOrder);

  res.status(201).json({
    success: true,
    message: "Order placed successfully",
    order: newOrder,
  });
});

router.get("/", (req, res) => {
  res.json({
    success: true,
    orders,
  });
});

module.exports = router;