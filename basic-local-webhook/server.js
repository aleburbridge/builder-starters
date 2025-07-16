// Since Builder won't let you run webhooks on localhost, you will have to tunnel this through ngrok

const express = require("express");
const app = express();
const port = 5005;

app.use(express.json());

// Add CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.post("/webhook", (req, res) => {
  const { newValue, previousValue } = req.body;
  console.log("Received webhook:");
  console.log("New Value:", newValue);
  console.log("Previous Value:", previousValue);

  res.status(200).send("Webhook received successfully");
});

app.listen(port, () => {
  console.log(`Webhook server is running at http://localhost:${port}`);
});
