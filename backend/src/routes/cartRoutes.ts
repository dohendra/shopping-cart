import express from "express";
import Cart from "../models/Cart";
import Product from "../models/product";

const router = express.Router();

router.get("/", async (req, res) => {
  const cart = await Cart.find().populate("productId");
  res.json(cart);
});

router.post("/", async (req, res) => {
  const { productId } = req.body;
  let cartItem = await Cart.findOne({ productId });

  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    cartItem = new Cart({ productId, quantity: 1 });
  }
  await cartItem.save();
  res.json(cartItem);
});

router.put("/:id", async (req, res) => {
  const { quantity } = req.body;
  await Cart.findByIdAndUpdate(req.params.id, { quantity });
  res.json({ message: "Updated" });
});

router.delete("/:id", async (req, res) => {
  await Cart.findByIdAndDelete(req.params.id);
  res.json({ message: "Removed" });
});

export default router;
