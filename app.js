const express = require('express');
const bodyParser = require('body-parser');
const indexRouter = require('./index');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', indexRouter);


app.listen(3000, function() {
    console.log('Server is running on port 3000');
});

module.exports = app;
