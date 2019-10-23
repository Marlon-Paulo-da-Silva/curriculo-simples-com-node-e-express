const express = require('express');
const path = require('path');

const CurriculoController = require('./controllers/curriculo-controller');

const port = 3000;
const app = express();

//Setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res, next)=> {
    res.render('index',{
        title: "Meu Primeiro servidor Express",
        version:"0.0.0"
    });
});

app.get('/curriculo', (req, res, next) => {
   const curriculoData = CurriculoController.getData();

   res.render('curriculo', curriculoData);
});

app.listen(port, err => {
    console.log(`Servidor está ouvindo na porta: ${port}`);
});