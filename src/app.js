import express from "express";
import authRoute from "./routes/auth.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({
    status: 200,
    success: true,
    message: "Server is on running...",
  });
});

app.use("/api/auth", authRoute);

app.use("*", (req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
  next();
});

export default app;
