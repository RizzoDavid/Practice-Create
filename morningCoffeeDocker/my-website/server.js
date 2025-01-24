const express = require('express');
const axios = require('axios');
const RSSParser = require('rss-parser');
const app = express();
const port = 3000;

app.use(express.static('src'));

app.get('/weather', async (req, res) => {
  try {
    const response = await axios.get('YOUR_WEATHER_API_URL');
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get('/rss', async (req, res) => {
  const parser = new RSSParser();
  try {
    const feed = await parser.parseURL('YOUR_RSS_FEED_URL');
    res.json(feed);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});