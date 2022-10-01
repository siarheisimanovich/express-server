import express from 'express';

const app = express();
const PORT = process.env.SERVER_PORT || 3000;

app.get('/data', (req, res) => {
    res.json({ "message": "Hello from simple express server" });
});

app.listen(PORT, () => {
    console.log(`Listening port ${PORT}`)
})