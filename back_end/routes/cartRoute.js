import express from "express";
import { addToCart, removeFromCart,getCart, decreaseQuantity } from '../controllers/cartController.js';
import authMiddleware from '../middleware/auth.js';


const cartRouter = express.Router();

// Add to cart
cartRouter.post("/add", authMiddleware, addToCart); 
// Remove from cart
cartRouter.post("/remove", authMiddleware, removeFromCart);
// Decrease from cart
cartRouter.post("/decrease", authMiddleware, decreaseQuantity);
// Fetch user cart data
cartRouter.post("/get", authMiddleware, getCart);

export default cartRouter;