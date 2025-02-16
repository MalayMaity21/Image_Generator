// const express = require("express");
// const axios = require("axios");
// const fs = require("fs");
// const path = require("path");
// const cors = require("cors");
// const PORT = 3000;


// const app = express();


// app.get("/", (req, res) => {
//   res.send("root directory");
// })



// require("dotenv").config();


// const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
// const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`;

// async function generateImage(prompt) {
//   try {
//     const response = await axios.post(
//       GEMINI_API_URL,
//       {
//         contents: [{ parts: [{ text: prompt }] }],
//       },
//       {
//         headers: { "Content-Type": "application/json" },
//       }
//     );

//     // Extract image response
//     const imageData = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;
//     console.log("Generated Image Data:", imageData);
//   } catch (error) {
//     console.error(
//       "Error generating image:",
//       error.response?.data || error.message
//     );
//   }
// }


// app.listen(PORT, () => {
//   console.log(`Server is Listening on port ${PORT}`);
// })

// // Example usage
// generateImage("what is linear data structure");








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

// New Route to Get Generated Text
app.get("/generate-text", async (req, res) => {
  try {
    const prompt = req.query.prompt || "Explain linear data structures";

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
