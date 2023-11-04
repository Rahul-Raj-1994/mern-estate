import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();
import cookieParser from 'cookie-parser';

import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js"

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to database");
}).catch((err) => {
    console.log("err", err);
})

const app = express();

app.use(express.json());

app.use(cookieParser());

app.listen(3000, () => {
    console.log("Server Up and Running on port 3000");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.json({
        success: false,
        statusCode,
        message
    });
});