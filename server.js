// server.js
const express = require("express");
const cors = require("cors");
const { Firestore } = require("@google-cloud/firestore");

const app = express();
const firestore = new Firestore();
app.use(cors());
app.use(express.json());

// Register Participant
app.post("/register", async (req, res) => {
  const { name, email, skills } = req.body;
  try {
    await firestore.collection("participants").add({ name, email, skills });
    res.status(201).send("Participant registered successfully!");
  } catch (error) {
    res.status(500).send("Error registering participant: " + error.message);
  }
});

// Add Submission
app.post("/submit", async (req, res) => {
  const { teamName, projectLink, description } = req.body;
  try {
    await firestore.collection("submissions").add({
      teamName,
      projectLink,
      description,
      timestamp: new Date(),
    });
    res.status(201).send("Submission saved successfully!");
  } catch (error) {
    res.status(500).send("Error saving submission: " + error.message);
  }
});

// AI-Powered Judging Insights
app.post("/judge", async (req, res) => {
  const { description } = req.body;
  const openai = require("openai");
  const api = new openai.OpenAIApi(new openai.Configuration({ apiKey: "YOUR_OPENAI_API_KEY" }));

  try {
    const feedback = await api.createChatCompletion({
      model: "gpt-4",
      messages: [{ role: "user", content: `Provide feedback on this project: ${description}` }],
    });
    res.status(200).send(feedback.data.choices[0].message.content);
  } catch (error) {
    res.status(500).send("Error generating feedback: " + error.message);
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
