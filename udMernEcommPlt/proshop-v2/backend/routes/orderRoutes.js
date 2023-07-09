import express from "express"; const router = express.Router();
import { addOrderItems, getMyOrders, getOrderById, updateOrderToPaid,
  updateOrderToDelivered, getOrders } from "../controllers/orderController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/")
  .post(protect, addOrderItems)
  .get(protect, admin, getOrders);
router.get("/mine", protect, getMyOrders);
router.route("/:id").get(protect, getOrderById); //, admin
router.put("/:id/pay", protect, admin, updateOrderToPaid);
router.put("/:id/deliver", protect, admin, updateOrderToDelivered);

export default router;
