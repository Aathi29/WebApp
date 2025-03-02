const express = require('express');
const app = express();
const port = 3000;

// Middleware to serve static files
app.use(express.static('frontend'));

// Route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// Start Server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
