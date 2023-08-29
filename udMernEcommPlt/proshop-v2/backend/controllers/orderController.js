import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";

//  @desc     Create new order
//  @route    POST /api/orders
//  @access   Private
const addOrderItems = asyncHandler(async (req, res) => { console.log("POST /api/orders");
  const { orderItems, shippingAddress, paymentMethod,
    itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body;
  if(!orderItems || orderItems.length < 1) {
    res.status(400); throw new Error("No order items");
  } else {
    const order = new Order({
      orderItems: orderItems.map(x => ({...x, product: x._id, _id: undefined})),
      user: req.user._id, shippingAddress, paymentMethod, itemsPrice,
      taxPrice, shippingPrice, totalPrice,
    });
    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }
  // res.json("add order items");
});

//  @desc     Get logged in user orders
//  @route    GET /api/orders/mine
//  @access   Private
const getMyOrders = asyncHandler(async (req, res) => {
  const orders = Order.find({ user: req.usewr._id });
  res.status(200).json(orders);
  // res.json("get my orders");
});

//  @desc     Get order by ID
//  @route    GET /api/orders/:id
//  @access   Private
const getOrderById = asyncHandler(async (req, res) => {
  // console.log("getOrderById:: req.params:", req.params);
  const order = await Order.findById(req.params.id).populate("user", "name email");
  // console.log("order:", order);
  if(order) {
    res.status(200).json(order);
  } else {
    res.status(404); throw new Error("Order not found");
  }
  // res.json("get order by id");
});

//  @desc     Update order to paid
//  @route    PUT /api/orders/:id/pay
//  @access   Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if(order) {
    order.isPaid = true; order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id, status: req.body.status,
      update_time: req.body.update_time, email: req.body.payer.email_address
    };
    const updatedOrder = await order.save();
    res.status(200).json(updatedOrder);
  } else {
    res.status(404); throw new Error("Order not found");
  }
  //res.json("update order to paid");
});

//  @desc     Update order to dewlivered
//  @route    PUT /api/orders/:id/deliver
//  @access   Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.json("update order to delivered");
});

//  @desc     Get all orders
//  @route    GET /api/orders
//  @access   Private/Admin
const getOrders = asyncHandler(async (req, res) => {
  res.json("get all orders");
});

export { addOrderItems, getMyOrders, getOrderById, updateOrderToPaid, updateOrderToDelivered, getOrders };
