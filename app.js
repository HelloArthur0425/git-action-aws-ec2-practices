const express = require('express');
const path = require('path');
const app = express();

const port = 4009;

app.get('/api/v1/me', (req, res) => {
    res.json({
        status: 200,
        message: 'success',
        data: {
            user: {
                fullname: 'Cheng Cheuk Nam, Arthur',
                email: "arthurcheng0425@gmail.com",
                phone: "+852 63139575",
                company: null,
            }
        },
    });
});

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, console.log(`The servie is linstin to http://localhost:${port}`));