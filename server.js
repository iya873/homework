const express = require('express');

const app = express();


// app.get('/greeting', (req, res) => {
//     res.send('Hello Stranger');
// });

// app.get('/greeting/:firstname/', (req, res) => {
//     console.log(req.params);
//     res.send('How are you ' + req.params.firstname + '!');
// });

// app.listen(3000, () => {
//     console.log('Listening on port 3000');
// });


app.get('/tip', (req, res) => {
    res.send('this is the tip page!');
});

app.get('/tip/:total/:tipPercentage', (req, res) => {
    console.log(req.params);
    // let total = Number(req.params.total);
    let total = +req.params.total;

    // let tipPercentage = Number(req.params.tipPercentage);
    let tipPercentage = +req.params.tipPercentage;

    // let tip = total * tipPercentage / 100;
    let tip = total * tipPercentage / 100;

    // tip = String(tip);
    tip = tip + "";

    res.send(tip);
});

app.listen(8080, () => {
    console.log('listening');
});