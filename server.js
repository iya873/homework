const express = require('express');

const app = express();


app.get('/greeting', (req, res) => {
    res.send('Hello Stranger');
});

app.get('/greeting/:firstname/', (req, res) => {
    console.log(req.params);
    res.send('How are you ' + req.params.firstname + '!');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});