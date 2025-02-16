//Full Backend Code with post request

const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`;

app.get("/", (req, res) => {
  res.send("Welcome to the Gemini API Server");
});

// API Endpoint for Text Generation (POST request)
app.post("/generate-text", async (req, res) => {
  try {
    const { prompt } = req.body; // Get prompt from frontend request body

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required!" });
    }

    const response = await axios.post(
      GEMINI_API_URL,
      {
        contents: [{ parts: [{ text: prompt }] }],
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    const generatedText = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!generatedText) {
      return res.status(500).json({ error: "No text generated" });
    }

    res.json({ prompt, generatedText }); // Send JSON response
  } catch (error) {
    console.error("Error generating text:", error.response?.data || error.message);
    res.status(500).json({
      error: "Error generating text",
      details: error.response?.data || error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
