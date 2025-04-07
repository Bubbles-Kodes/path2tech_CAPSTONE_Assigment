import userModel from "../models/usermodel.js";

// Add to cart
const addToCart = async (req, res) => {
    try{
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if(!cartData[req.body.itemId])
        {
            cartData[req.body.itemId] = 1;
        }
        else{
            cartData[req.body.itemId] += 1; 
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,message:"Item Added to Cart"});
    
    } catch(error) {
        console.log(error);
        res.json({success:false,message:"Error in adding to cart"});
    }
}

// Remove from cart
const removeFromCart = async (req, res) => {
    try{
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if(cartData[req.body.itemId]>0) {
            cartData[req.body.itemId] -= 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,message:"Item Removed from Cart"});
    } catch(error) {
        console.log(error);
        res.json({success:false,message:"Error in adding to cart"});
    }
}

// Fetch user cart data
const getCart = async (req, res) => {
    try{
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.json({success:true,cartData});
    } catch(error) {
        console.log(error);
        res.json({success:false,message:"Error in adding to cart"});
    }
}

// Decrease food quantity
const decreaseQuantity = async (req, res) => {
    try {
        const { userId, itemId } = req.body; // Extract userId and itemId from the request body

        // Find the user by ID
        let userData = await userModel.findById(userId);
        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        let cartData = userData.cartData;

        // Check if the item exists in the cart
        if (!cartData[itemId]) {
            return res.status(404).json({ success: false, message: "Item not found in cart" });
        }

        // Decrease the quantity
        cartData[itemId] -= 1;

        // If the quantity reaches 0, remove the item from the cart
        if (cartData[itemId] <= 0) {
            delete cartData[itemId];
        }

        // Update the user's cart in the database
        await userModel.findByIdAndUpdate(userId, { cartData });

        res.json({ success: true, message: "Item quantity decreased", cartData });
    } catch (error) {
        console.error("Error decreasing item quantity:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};


export {addToCart,removeFromCart,getCart,decreaseQuantity};