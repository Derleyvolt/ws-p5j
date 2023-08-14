require('./wsServer');

const express = require('express');
const app     = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

app.listen(process.env.PORT, () => {
    console.log(`listening on *:${process.env.PORT}`);
});