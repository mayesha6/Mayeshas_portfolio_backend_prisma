import compression from "compression";
import cors from "cors";
import express from "express";
import { userRouter } from "./modules/user/user.routes";
import { postRouter } from "./modules/post/post.routes";
import { authRouter } from "./modules/auth/auth.routes";
import cookieParser from "cookie-parser";
import { projectRouter } from "./modules/project/project.routes";


const app = express();

app.use(compression()); 
app.use(cookieParser());
app.use(express.json()); 
app.use(
  cors({
    origin: "https://personal-portfolio-six-sigma-40.vercel.app",
    credentials: true,
  })
);
app.use((req, _res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});

app.use("/api/v1/user", userRouter)
app.use("/api/v1/post", postRouter)
app.use("/api/v1/auth", authRouter)
app.use("/api/v1/project", projectRouter)


app.get("/", (_req, res) => {
  res.send("My portfolio API is running...");
});


app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

export default app;
