import express from "express";
import cloudinary from "../utils/cloudinary.js"; // adjust path if needed
import Product from "../models/product.model.js";
const router = express.Router();
import message from "../models/message.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
router.post("/createProduct", async (req, res) => {
  try {
    const { name, price, discount, unit, imageUrl, description } = req.body;

    // 🧩 Validation check
    if (!name || !price || !unit || !imageUrl) {
      return res.status(400).json({
        success: false,
        message:
          "All fields (name, price, unit, imageUrl) are required. Discount is optional.",
      });
    }

    // 💰 Convert to numbers and calculate final price
    const priceNum = Number(price);
    const discountNum = Number(discount) || 0;
    const finalprice = priceNum - (priceNum * discountNum) / 100;

    // 🛒 Create the product
    const product = await Product.create({
      name: name.trim(),
      price: priceNum,
      discount: discountNum,
      unit: unit.trim(),
      imageUrl: imageUrl.trim(),
      finalprice, 
      description,
    });

    // ✅ Success response
    res.status(201).json({
      success: true,
      message: "✅ Product created successfully!",
      product,
    });
  } catch (error) {
    console.error("❌ Error creating product:", error);
    res.status(500).json({
      success: false,
      message: "Server error while creating product",
      error: error.message,
    });
  }
});
router.get("/getproducts", async (req, res) => {
  try {
    const products = await Product.find();

    if (!products || products.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No products found!",
      });
    }

    res.status(200).json({
      success: true,
      message: "✅ Products fetched successfully!",
      products,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({
      success: false,
      message: "❌ Server error while fetching products.",
      error: error.message,
    });
  }
});
router.post("/uploadmsg", async (req, res) => {
  try {
    const { uploadmessage } = req.body;

    // Validation
    if (!uploadmessage || uploadmessage.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Message text is required.",
      });
    }

    // Save message to DB
    const newMsg = await message.create({ message: uploadmessage });

    // Respond back to frontend
    res.status(201).json({
      success: true,
      message: "✅ Message uploaded successfully!",
      data: newMsg,
    });
  } catch (error) {
    console.error("❌ Error uploading message:", error);
    res.status(500).json({
      success: false,
      message: "Server error while uploading message.",
      error: error.message,
    });
  }
});
router.get("/getmessage", async (req, res) => {
  try {
    const latestMessage = await message.findOne().sort({ createdAt: -1 });

    if (!latestMessage) {
      return res.status(200).json({
        success: true,
        latestMessage: { message: "No messages yet" },
      });
    }

    res.status(200).json({
      success: true,
      latestMessage,
    });
  } catch (error) {
    console.error("❌ Error fetching message:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});
router.put("/updateProduct", async (req, res) => {
  try {
    const {
      productid,
      name,
      price,
      unit,
      discount,
      imageUrl,
      finalprice,
      description,
    } = req.body;

    // Find product by ID
    const product = await Product.findById(productid);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Update only the fields provided
    if (name) product.name = name;
    if (price) product.price = price;
    if (unit) product.unit = unit;
    if (discount) product.discount = discount;
    if (imageUrl) product.imageUrl = imageUrl;
    if (finalprice) product.finalprice = finalprice;
    if (description) product.description = description;

    // Save changes
    const updatedProduct = await product.save();

    res.status(200).json({
      message: "✅ Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({
      message: "❌ Server error while updating product",
      error: error.message,
    });
  }
});

router.delete("/deleteproduct/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Check if product exists
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "❌ Product not found" });
    }

    // Delete product
    await Product.findByIdAndDelete(id);

    res.status(200).json({ message: "✅ Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({
      message: "❌ Server error while deleting product",
      error: error.message,
    });
  }
});
export default router;
