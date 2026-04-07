import express from "express";
import dotenv from "dotenv"
import cokkieParser from "cookie-parser"

import {connectDB} from  "./lib/db.js"
import authRoutes  from "./routes/auth.route.js";

dotenv.config()
const app = express();

const PORT = process.env.PORT

// Add middleware
app.use(express.json());
app.use(cokkieParser());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes)

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log("Server is running on port:" + PORT);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
};

startServer();
