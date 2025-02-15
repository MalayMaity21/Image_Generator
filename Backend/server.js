require("dotenv").config();
const axios = require("axios");

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`;

async function generateImage(prompt) {
  try {
    const response = await axios.post(
      GEMINI_API_URL,
      {
        contents: [{ parts: [{ text: prompt }] }],
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    // Extract image response
    const imageData = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;
    console.log("Generated Image Data:", imageData);
  } catch (error) {
    console.error(
      "Error generating image:",
      error.response?.data || error.message
    );
  }
}

// Example usage
generateImage("what is linear data structure");
