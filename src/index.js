import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT || 3000);

dotenv.config({
  path: "./env",
});

connectDB();
