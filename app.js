const express = require('express');

const port = 3000;
const app = express();

app.get('/', (req, res, next)=> {
    res.send({
        title: "Meu Primeiro servidor Express",
        version:"0.0.0"
    });
});

app.listen(port, err => {
    console.log(`Servidor está ouvindo na porta: ${port}`);
});