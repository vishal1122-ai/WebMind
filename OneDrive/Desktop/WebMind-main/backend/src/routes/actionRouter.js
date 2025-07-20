// src/routes/actionRouter.js
import express from "express";
import { dispatchAction } from "../services/actionDispatcher.js";

const router = express.Router();

router.post("/process", async (req, res) => {
  const { action, text, language, user_prompt } = req.body;

  try {
    const result = await dispatchAction(action, text, language, user_prompt);
    res.json({ result });
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

export default router;
