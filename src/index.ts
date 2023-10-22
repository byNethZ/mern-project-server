import express from 'express';

const app = express();
const PORT = 5000;

app.get('/hello', (_req, res) => {
    res.send('Hello world!');
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
    
})