import "dotenv/config";
import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { OpenAI } from "openai";
import actionRouter from "./routes/actionRouter.js";

const app = express();
app.use(cors());
app.use(express.json());

// Basic rate-limit (per IP)
app.use(
  rateLimit({
    windowMs: 60_000,
    max: 30,
    message: { error: "Too many requests" },
  })
);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Attach OpenAI instance to req for DI
app.use((req, _res, next) => {
  req.openai = openai;
  next();
});

app.use("/process", actionRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`WebMind backend on :${PORT}`));
