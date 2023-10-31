import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js"

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to database");
}).catch((err) => {
    console.log("err", err);
})

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("Server Up and Running on port 3000");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);