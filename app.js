const express = require('express');
const path = require('path');


const port = 3000;
const app = express();

//Setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const routes = require('./routes');
const curriculo = require('./routes/curriculo');

app.use(routes, curriculo);


app.listen(port, err => {
    console.log(`Servidor está ouvindo na porta: ${port}`);
});