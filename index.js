import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./schema.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

// Routes
app.get("/", async(req, res) => {
  res.send("API is running...");
});

app.post("/add-user", async (req, res) => {
    try {
        const { name, email, age } = req.body;
        const isUser = await User.findOne({ email });
        if (isUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const user = new User({ name, email, age });
        await user.save();
        res.status(201).json({ message: "User added successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Error adding user", error });
    }
});

//get all users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();  
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
});

//update user
app.put("/update-user/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const { name, age } = req.body;
    const user = await User.findOneAndUpdate({ email }, { name, age }, { new: true });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Error updating user", error });
  }
});
//delete user
app.delete("/delete-user/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOneAndDelete({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error });
  }
});

//view user
app.get("/view-user/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user", error });
  }
});

app.listen(8000, () => {
  console.log("Server running");
});

export default app;
