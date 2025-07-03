const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Dummy register route
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    console.log("Register request:", req.body);
    res.status(200).json({ message: `User ${name} registered successfully.` });
});

// Dummy login route
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log("Login request:", req.body);
    res.status(200).json({ message: `Login successful for ${email}.` });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
