require("dotenv").config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 8000;


const app = express();
app.use(express.json()); // Invoke the json middleware
app.use(cors());


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/name', (req, res) => {
    const name = "Sanket";
    res.json({ name });
});

app.get('/frontend', (req,res) => {
    res.sendFile(path.join(__dirname,'dist', 'index.html'));
})