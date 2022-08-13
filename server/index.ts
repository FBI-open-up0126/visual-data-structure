import * as dotenv from "dotenv";
if (process.env.NODE_ENV !== "production") {
    dotenv.config();
}
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Drawing from "./models/drawing";

mongoose
    .connect("mongodb://localhost:27017/visual-data-structure")
    .then(() => {
        console.log("Connected to database");
    })
    .catch(console.error.bind(console, "Connection error: "));

const app = express();

app.use(cors());

const PORT = Number(process.env.PORT) || 8080;

app.get("/api/drawings", async (req, res) => {
    const drawings = await Drawing.find({});
    res.send(drawings);
});

app.listen(PORT, () => {
    console.log(`Server opened on port ${PORT}`);
});
