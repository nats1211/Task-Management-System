import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes";
import authRoutes from "./routes/auth.routes";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", userRoutes);
app.use("/api", authRoutes);

export default app;
