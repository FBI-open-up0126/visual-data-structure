import express from "express";
import mongoose from "mongoose";
import cors from "cors";

mongoose
    .connect("mongodb://localhost:27017/visual-data-structure")
    .then(() => {
        console.log("Connected to database");
    })
    .catch(console.error.bind(console, "Connection error: "));

const app = express();

app.use(cors());

const PORT = Number(process.env.PORT) || 8080;

app.get("/api", (req, res) => {
    res.send("Everything works!");
});

app.post("/api", (req, res) => {
    res.send(`Created data with value of ${req.query.data}`);
});

app.listen(PORT, () => {
    console.log(`Server opened on port ${PORT}`);
});
