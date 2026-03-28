import express from "express";
import cors from "cors";
import { trendingUrl, base_Url, API_KEY } from "./Constants/constants.js";

//APP config
const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Basic route check
app.get("/", (req, res) => {
  res.send("Netflix Clone API Running");
});

// API route that fetches trending data as an example
app.get("/api/movies/trending", async (req, res) => {
  try {
    const response = await fetch(trendingUrl);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Generic category route
app.get("/api/movies/category/:genreId", async (req, res) => {
  try {
    const genreId = req.params.genreId;
    const response = await fetch(`${base_Url}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
