const express = require('express');
const path = require('path');

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
    res.render('curriculo',{
        title: 'Meu Curriculo',
        name: 'Marlon Paulo da Silva',
        profession: 'Estagiário',
        description:'Estagiário da tecnologia, sendo monitor de aulas de realidade virtual e aumentada',
        experience:[{
            company: 'Inova Prudente',
            office:'Estagiário',
            description: 'Monitor de aulas de RV e RA'
        },
        {
            company: 'Secretaria de Tecnologia de Presidente Prudente',
            office: 'Estagiário',
            description: 'Manutenção de computadores'
        }],
        education:[{
            institution: 'Fatec - Presidente Prudente',
            description: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
        }],
        skills: ['frontend, backend, mobile']
    });
});

app.listen(port, err => {
    console.log(`Servidor está ouvindo na porta: ${port}`);
});