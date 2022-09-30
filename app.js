const express = require('express');
const app = express();
const port = 4009;

app.get('/', (req, res) => {
    res.json({
        msg: 'Hello World!'
    });
});

app.listen(port, 'The servie is linstin to http://localhost:4009');