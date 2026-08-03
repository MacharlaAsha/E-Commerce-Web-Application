// server/routes/orderRoutes.js

const express = require("express");
const router = express.Router();

const {
  createOrder,
  getUserOrders,
  getAllOrders,
  updateOrderStatus,
} = require("../controllers/orderController");

const protect = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

// User Routes
router.post("/", protect, createOrder);
router.get("/", protect, getUserOrders);

// Admin Routes
router.get("/admin", protect, adminMiddleware, getAllOrders);
router.put("/:id", protect, adminMiddleware, updateOrderStatus);

module.exports = router;
