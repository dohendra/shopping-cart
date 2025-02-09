import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/product";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI as string;

const sampleProducts = [
  {
    name: "Laptop",
    price: 1200,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Smartphone",
    price: 800,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Headphones",
    price: 200,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Smartwatch",
    price: 300,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Tablet",
    price: 600,
    image: "https://via.placeholder.com/150",
  },
];

const seedDB = async () => {
    try {
      await mongoose.connect(MONGO_URI);
      console.log("✅ MongoDB connected for seeding");
  
      await Product.deleteMany();
      console.log("🗑 Existing products removed");
  
      await Product.insertMany(sampleProducts);
      console.log("✅ Sample products added");
  
      process.exit();
    } catch (error) {
      console.error("❌ Seeding error:", error);
      process.exit(1);
    }
  };
  
  seedDB();